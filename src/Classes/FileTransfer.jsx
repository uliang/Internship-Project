import React from 'react';
import Modal from 'react-bootstrap/Modal'//npm install react-bootstrap bootstrap

//Function For Modal Box For File Transfer
//Intention Was For Modal Box Containing Form To Submit Class List Etc. So Don't Have To Insert Data Manually
//Not Working Currently, Modal Box Not Visible For Some Reason
function ModalBox(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    IDK
        </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Centered Modal</h4>
                <form action="upload.php" method="post" enctype="multipart/form-data">
                    <input type="file" name="fileToUpload" id="fileToUpload" />
                    <input type="submit" value="Upload Image" name="submit" />
                </form>
            </Modal.Body>
            <Modal.Footer>
                <button onClick={props.onHide}>Close</button>
            </Modal.Footer>
        </Modal>
    );
}

export default function ModalButton() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <button variant="primary" onClick={() => setModalShow(true)}>
                Launch vertically centered modal
      </button>

            <ModalBox
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}