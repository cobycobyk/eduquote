import React, {useEffect, useState} from "react";
import { DTable, Tbody, Td, Th, Thead, Tr } from "../DashboardPage.styles";
import { useNavigate, useLocation } from "react-router-dom";
import { getAllClients } from "../../../utils/firebase";

export default function DashClients() {
  const location = useLocation();
  const currentUserInfo = location.state?.data;
  const [clients, setClients] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getClients = async () => {
      const allClients = await getAllClients(currentUserInfo.company)
      setClients(allClients);
    }
    getClients();
  }, []);

  const handleClick = (client) => {
    navigate(`/dashboard/clients/${client.email}/edit`, {state: {data: client}})
  }

  return (
    <DTable>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Email</Th>
          <Th>Status</Th>
          <Th>Created</Th>
          <Th>Actions</Th>
        </Tr>
      </Thead>
      {clients?.length ? (
        <Tbody>
          {clients?.map((client, key) => {
            return (
              <Tr key={key} onClick={() => handleClick(client)}>
                <Th>{client.firstName}</Th>
                <Td>{client.lastName}</Td>
                <Td>{client.email}</Td>
                <Td>{client.status}</Td>
              </Tr>
            );
          })}
        </Tbody>
      ) : (
        <div>No clients</div>
      )}
    </DTable>
  );
}
