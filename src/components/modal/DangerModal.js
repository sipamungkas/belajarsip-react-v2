import Modal from "./Modal";

export default function DangerModal(props) {
  return <Modal question={props.question} withButton={true}></Modal>;
}
