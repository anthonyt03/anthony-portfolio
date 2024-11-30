import {
  Modal,
  ModalTrigger,
  ModalBody,
  ModalContent,
} from '~/components/ui/animated-modal'
import ContactForm from './ContactForm'

export default function ContactButton() {
  return (
    <Modal>
      <ModalTrigger className='group/modal-btn flex justify-center bg-black text-white dark:bg-white dark:text-black'>
        <span className='text-center transition duration-500 group-hover/modal-btn:translate-x-40'>
          Contact Me
        </span>
        <div className='absolute inset-0 z-20 flex -translate-x-40 items-center justify-center text-white transition duration-500 group-hover/modal-btn:translate-x-0'>
          ✉️
        </div>
      </ModalTrigger>
      <ModalBody>
        <ModalContent>
          <ContactForm />
        </ModalContent>
      </ModalBody>
    </Modal>
  )
}
