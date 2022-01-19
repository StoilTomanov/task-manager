import { findSelectedUser, updateSelectedUser } from "../api/crud.js";

export async function addUserMember(ev) {
    const selectedUser = await findSelectedUser(ev.target.value);
    const addBtn = ev.target.parentElement.parentElement.children[3].children[0]
    addBtn.addEventListener('click', async() => {
            await updateSelectedUser({
                teamId: sessionStorage.teamId,
            }, selectedUser.results[0].objectId);
        }) // in order this request to work you need to set ACL

}