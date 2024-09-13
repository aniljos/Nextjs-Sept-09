'use client'
import { checkForUniqueId, saveForm } from "@/actions/supplieractions";
import { FocusEvent, useRef } from "react";
import { useFormState } from "react-dom";

function AddSupplier() {


    const idref = useRef<HTMLInputElement>(null);
    const [formStatus, formAction] = useFormState(saveForm, {status: -1, message: ""});
    async function handleLostFocusId(e:FocusEvent){

        e.preventDefault();
        console.log("handleLostFocusId")
        const resp = await checkForUniqueId(Number(idref.current?.value));
        console.log(resp);

       
    }

    return (
        <div>
            <h4>Add Supplier</h4>

            <form action={formAction}>
                {formStatus.status != -1 ? <div className="alert">{formStatus.message + " " + formStatus.status}</div>: null}

                <div className="form-group">
                    <input ref={idref} className="form-control" type="number" placeholder="ID" name="sid" onBlur={handleLostFocusId}/>
                </div>
                <br />
                <div className="form-group">
                    <input className="form-control" type="text" placeholder="Name" name="name" />
                </div>
                <br />
                <div className="form-group">
                    <input className="form-control" type="text" placeholder="Person" name="person" />
                </div>
                <br />
                <div className="form-group">
                    <input className="form-control" type="text" placeholder="Email" name="email" />
                </div>
                <br />
                <div className="form-group">
                    <input className="form-control" type="text" placeholder="Location" name="location" />
                </div>
                <br />
                <div>
                    <button type="submit">Save</button>
                </div>

            </form>
        </div>
    )
}

export default AddSupplier;