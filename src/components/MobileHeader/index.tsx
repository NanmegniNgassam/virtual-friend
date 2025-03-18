import Avatar from "@mui/material/Avatar/Avatar";
import logo from "../../assets/images/logo.png";
import { MobileHeaderContainer, OnlineStatus, TextContainer, UserNameLayout } from "./Header.styles";
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { useState } from "react";

const MobileHeader = () => {
    const [isModalOpen, setModalOpen] = useState<boolean>(false);

    /**
     * Close the discussion deletion confirmation modal
     */
    const closeConfirmationModal = (): void => {
        setModalOpen(false);
    }

    const deleteDiscussion = (): void => {
        try {

            closeConfirmationModal();
        } catch(error) {
            console.log("Error occuring while deleting the whole discussion : ", error);
            throw error;
        }
    }

    return (
        <MobileHeaderContainer>
            <Avatar
                alt="Remy Sharp"
                src={logo}
                sx={{ width: 50, height: 50, boxShadow: 3}}
            />
            <TextContainer>
                <UserNameLayout>virtual friend</UserNameLayout>
                <OnlineStatus>status</OnlineStatus>
            </TextContainer>
            <DeleteIcon color="secondary" style={{ cursor: "pointer" }} onClick={() => setModalOpen(true)} />

            <Dialog
                open={isModalOpen}
                onClose={closeConfirmationModal}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth="tablet"
            >
                <DialogTitle id="alert-dialog-title">
                    Supprimer tous les messages de la conversation ?
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        La totalité de votre échange avec votre virtual friend sera supprimé de manière définitive.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button color="secondary" onClick={closeConfirmationModal}>Retour</Button>
                    <Button color="secondary" variant="contained" onClick={deleteDiscussion}>
                        Valider
                    </Button>
                </DialogActions>
            </Dialog>
        </MobileHeaderContainer>
    );
}
 
export default MobileHeader;