import { useNavigate } from "react-router-dom";

const BackButton = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        if (window.history.length > 2) {
            navigate(-1);
        } else {
            navigate("/home");
        }
    };

    return (
        <button onClick={handleBack} className="link-orange">
        ← Revenir à la page précédente
        </button>
    );
};

export default BackButton;
