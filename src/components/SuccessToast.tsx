import { Toast, ToastBody, Button } from 'reactstrap'

interface ISuccessToastProps {
  toastIsOpen: boolean
  setToastIsOpen: (isOpen: boolean) => void
}

export default function SuccessToast({
  toastIsOpen,
  setToastIsOpen,
}: ISuccessToastProps) {
  return (
    <Toast
      className="bg-success text-white fixed-bottom ms-auto me-4 mb-4"
      isOpen={toastIsOpen}
      fade
    >
      <ToastBody className="d-flex justify-content-between">
        Produto adicionado ao carrinho.
        <Button
          close
          className="btn-close-white"
          onClick={() => setToastIsOpen(false)}
        ></Button>
      </ToastBody>
    </Toast>
  )
}
