import getEmotionImage from "../util/get-emotion-image";
import "./EmotionItem.css";

function EmotionItem({ emotionId, emotionName, isSelected, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`EmotionItem ${
        isSelected ? `EmotionItem_on_${emotionId}` : ""
      }`}
    >
      <img className="emotionItem_img" src={getEmotionImage(emotionId)} />
      <div className="emotionItem_name">{emotionName}</div>
    </div>
  );
}

export default EmotionItem;
