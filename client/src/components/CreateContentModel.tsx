import Cross from "../icons/Cross";
import Input from "./Input";
import Button from "./ui/Button";

interface createContentInterface {
  open: boolean;
  onClose: () => void;
}

const CreateContentModel = ({ open, onClose }: createContentInterface) => {
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
                <Input placeholder="Name" />
                <Input placeholder="Link" />
              </div>

              {/* button */}
              <div className="flex justify-center items-center">
                <Button variant="primary" size="md" text="Submit" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateContentModel;
