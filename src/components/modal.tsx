import { IoMdClose } from "react-icons/io"

interface ModalProps{
  open: boolean
  onClose: () => void
  children?:React.ReactNode
}

export const Modal:React.FC<ModalProps> = ({ open, onClose, children }) => {
  return (
    <div
      onClick={onClose}
      className={`
        fixed inset-0 flex justify-center items-center transition-colors z-50
        ${open ? "visible bg-black/20" : "invisible"}
      `}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
          bg-white rounded-xl shadow p-6 transition-all
          ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
        `}
      >
        <button
          onClick={onClose}
          className="absolute top-2 transition-all right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
        >
          <IoMdClose/>
        </button>
        {children}
      </div>
    </div>
  )
}