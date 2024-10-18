import { useContext } from "react";
import { ConfirmContext } from "../context/useConfirmContext";

const ConfirmUser = () => {
    const { handleConfirm, confirm } = useContext(ConfirmContext);
    console.log(confirm);

    return (
        <div id='quiz'>
            <h3>
                Sizga jami 30 ta test beriladi.
                <br />
                Har bir test uchun 1 daqiqa vaqtingiz bo'ladi va har bir
                testning javobini faqat bir marta belgilashingiz mumkin.
                Tayyormisiz?
            </h3>
            <button className='start-btn' onClick={handleConfirm}>
                Boshlash
            </button>
        </div>
    );
};

export default ConfirmUser;
