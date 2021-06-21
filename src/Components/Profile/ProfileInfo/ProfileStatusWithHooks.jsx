import React, {useEffect, useState} from "react";


const ProfileStatusWithHooks = (props) => {
    const [status, setStatus] = useState(props.status);
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])


    const activateEditMode = () => {
        setEditMode(true);
    }
    const deActivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    }
    const onStatusChange = (e) => {
        let newStatus = e.target.value;
        setStatus(newStatus);
    }

    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{props.status || "No status"}</span>
            </div>
            }
            {editMode &&
            <div>
                <input onChange={onStatusChange} autoFocus={true} onBlur={deActivateEditMode}
                       value={status}/>
            </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;