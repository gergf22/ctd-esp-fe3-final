import Form from "../Components/Form";
import { useContexGlobal } from "../Components/utils/global.context";
import ContactStyles from "../Styles/Contact.module.css";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const {state} = useContexGlobal()
  return (
    <div className={state.theme? "dark" : ""}>
      <div className={ContactStyles.contactConteiner}>
        <h2>Want to know more?</h2>
        <p>Send us your questions and we will contact you</p>
        <Form theme={state.theme}/>
      </div>
    </div>
  );
};

export default Contact;
