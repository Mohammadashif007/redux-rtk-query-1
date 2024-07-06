import "./App.css";

import { useAddContactMutation, useContactQuery, useContactsQuery, useDeleteContactMutation, useUpdateContactMutation } from "./services/contactApi";

function App() {
    const { data, error, isLoading, isFetching } = useContactsQuery();

    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <h1>Redux RTK Query</h1>
            {error && (
                <span style={{ color: "red" }}>Something went wrong.</span>
            )}
            {isLoading && <span style={{ color: "blue" }}>...Loading</span>}
            {isFetching && (
                <span style={{ color: "orange" }}>...Data Fetching</span>
            )}
            {data && data.length > 0 && (
                <div style={{ marginTop: "20px" }}>
                    {data.map((contact) => (
                        <div key={contact.id}>
                            <span>{contact.name}</span>
                            <span>
                                <ContactDetail id={contact.id}></ContactDetail>
                            </span>
                        </div>
                    ))}
                </div>
            )}
            <div>
              <AddContact></AddContact>
            </div>
        </div>
    );
}

export const ContactDetail = ({ id }: { id: number }) => {
    const { data } = useContactQuery(id);
    return (
        <div>
            <p>{data?.email}</p>
            <p>{data?.id}</p>
            <p>{data?.username}</p>
        </div>
    );
};

export const AddContact = () => {
  const [addContact] = useAddContactMutation();
  const [updateContact] = useUpdateContactMutation();
  const [deleteContact] = useDeleteContactMutation();
    const contact = {
        'id': 2,
        'name': "Ashif",
        'username': "Anik M Ashif,",
        'email': "ashif@gmail.com",
    };

    const updatedContact = {
        'id': 2,
        'name': "Ashif Updated",
        'username': "Anik,",
        'email': "ashif@gmail.com",
    };
    const addHandler = async() => {
      await addContact(contact)
    }
    const updateHandler = async() => {
      await updateContact(updatedContact)
    }
    const deleteHandler = async() => {
        await deleteContact(contact.id)
    }
    
    return (<div>
      <button onClick={addHandler}>Add Contact</button>
      <button onClick={updateHandler}>Update Contact</button>
      <button onClick={deleteHandler}>Update Contact</button>
    </div>);
};

export default App;
