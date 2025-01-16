import { useRef, useState } from "react";
import Cross from "../icons/Cross";
import Button from "./ui/Button";
import Input from "./ui/Input";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

interface createContentInterface {
  open: boolean;
  onClose: () => void;
}

// enum to control type of the content
enum ContentType {
  Youtube = "youtube",
  Twitter = "twitter",
  Document = "document"
}

const CreateContentModel = ({ open, onClose }: createContentInterface) => {
  //these refs are used to keep track of the value input in respective fields
  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLInputElement>(null);

  // type is defined as a state variable varies with the button
  const [type, setType] = useState(ContentType.Youtube);

  async function submit() {
    //this will fetch the title and the link from the ref, and send it to the backend
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;
    const content = contentRef.current?.value;
    const contentId = uuidv4();
    //axios.post("Address",{data to be sent},{headers containing authentication})
    await axios.post(
      `${BACKEND_URL}/api/v1/content`,
      {
        contentId,
        link,
        title,
        type,
        content
      },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );

    onClose();
  }

  return (
    <>
      {open && (
        <div>
          <div className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center bg-gray-500 opacity-70"></div>
          <div className="w-screen h-screen top-0 left-0 fixed flex justify-center items-center">
            <div className="bg-white h-2/6 w-2/6 border border-gray-600 rounded-lg p-8">
              {/* cross button */}
              <div className="flex justify-end">
                <span onClick={onClose} className="cursor-pointer">
                  <Cross size="md" />
                </span>
              </div>

              {/* input boxes */}
              <div className="mt-4 flex flex-col justify-center items-center">
                <Input placeholder="Name" reference={titleRef} />
                {type != ContentType.Document && <Input placeholder="Link" reference={linkRef} />}
                {type == ContentType.Document && <Input placeholder="Content" reference={contentRef} />}
              </div>

              {/* type */}
              <div className="flex justify-center gap-3 m-3">
                <Button
                  variant={
                    type === ContentType.Youtube ? "primary" : "secondary"
                  }
                  size="md"
                  text="Youtube"
                  onClick={() => setType(ContentType.Youtube)}
                />
                <Button
                  variant={
                    type === ContentType.Twitter ? "primary" : "secondary"
                  }
                  size="md"
                  text="Tweet"
                  onClick={() => setType(ContentType.Twitter)}
                />
                <Button
                  variant={
                    type === ContentType.Document ? "primary" : "secondary"
                  }
                  size="md"
                  text="Text"
                  onClick={() => setType(ContentType.Document)}
                />
              </div>

              {/* button */}
              <div className="flex justify-center items-center">
                <Button
                  variant="primary"
                  size="md"
                  text="Submit"
                  onClick={submit}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateContentModel;
