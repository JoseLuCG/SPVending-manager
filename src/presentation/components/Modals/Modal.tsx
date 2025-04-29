import { GenericModalProps } from "../../../domain/entities/property-models/componentsProperties";
import ClubRegisterModal from "./ClubRegisterModal/ClubRegisterModal";
import MachineRegisterModal from "./MachineRegisterModal/MachineRegisterModal";
import TenantRegisterModal from "./TenantRegisterModal/TenantRgisterModal";
import UserRegisterModal from "./UserRegisterModal/UserRegisterModal";

function Modal({ typeModal, isOpen, onClose}:GenericModalProps) {
    if (typeModal == "Tenant") return <TenantRegisterModal isOpen={isOpen} onClose={onClose}/>;
    if (typeModal == "Club") return <ClubRegisterModal isOpen={isOpen} onClose={onClose} />;
    if (typeModal == "Machine") return <MachineRegisterModal isOpen={isOpen} onClose={onClose}/>;
    if (typeModal == "User") return <UserRegisterModal isOpen={isOpen} onClose={onClose} />;
}

export default Modal;