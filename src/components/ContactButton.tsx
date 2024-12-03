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
      <ModalTrigger>
        <button className='relative p-[3px]'>
          <div className='absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500' />
          <div className='group relative z-20 rounded-[6px] bg-black px-8 py-2 text-neutral-300 transition duration-200 hover:bg-transparent'>
            Contact Me
          </div>
        </button>
      </ModalTrigger>
      <ModalBody>
        <ModalContent>
          <ContactForm />
        </ModalContent>
      </ModalBody>
    </Modal>
  )
}
