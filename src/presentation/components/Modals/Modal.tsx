import { GenericModalProps } from "../../../domain/entities/property-models/componentsProperties";
import ClubRegisterModal from "./ClubRegisterModal/ClubRegisterModal";
import TenantRegisterModal from "./TenantRegisterModal/TenantRgisterModal";

function Modal({ typeModal, isOpen, onClose}:GenericModalProps) {
    if (typeModal == "Tenant") return <TenantRegisterModal isOpen={isOpen} onClose={onClose}/>;
    if (typeModal == "Club") return <ClubRegisterModal isOpen={isOpen} onClose={onClose} />;
    if (typeModal == "Machine");
    if (typeModal == "User");
}

export default Modal;