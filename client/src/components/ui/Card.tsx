import Delete from "../../icons/Delete";
import Twitter from "../../icons/Twitter";
import Open from "../../icons/Open";
import Youtube from "../../icons/Youtube";
import { BACKEND_URL } from "../../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface CardProps {
  title: string;
  type: string;
  link: string;
}

const Card = ({ title, link, type }: CardProps) => {

  const navigate = useNavigate();

  async function deleteContent() {
    const token = localStorage.getItem("token");
    await axios.delete(`${BACKEND_URL}/api/v1/content`, {
      headers: {
        authorization: token,
      },
    });
    navigate(0); // this will immediately refresh the page as we delete the content
  }

  return (
    <div className="px-2 py-4 bg-white rounded-md border-gray-200 max-w-80 border min-h-48 min-w-80">
      {/* top component */}
      <div className="flex justify-between items-center px-2">
        <div className="flex items-center text-gray-500">
          {type === "twitter" && <Twitter size="md" />}
          {type === "youtube" && <Youtube size="md" />}
        </div>
        <div className="font-normal flex items-center">{title}</div>

        <div className="flex items-center justify-between text-gray-500 min-w-11">
          <div className="pr-2 text-gray-500">
            <a href={link} target="_blank">
              <Open size="sm" />
            </a>
          </div>
          <div className="text-gray-500">
            <Delete size="sm" onClick={deleteContent} />
          </div>
        </div>
      </div>

      {/* bottom component 
      https://www.youtube.com/watch?v=scg3GkMpoKI
      "https://www.youtube.com/embed/scg3GkMpoKI?si=XYxuV6SvkkD7StKO"
      */}
      <div className="pt-4 h-44">
        {type === "youtube" && (
          <iframe
            width="w-full"
            src={link.replace("watch?v=", "embed/")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        )}

        {type === "twitter" && (
          <blockquote className="twitter-tweet h-0 w-full">
            <a href={link.replace("x.com", "twitter.com")}></a>
          </blockquote>
        )}
      </div>
    </div>
  );
};

export default Card;
