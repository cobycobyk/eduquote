import React, {useContext, useEffect, useState} from "react";
import { DTable, Tbody, Td, Th, Thead, Tr } from "../DashboardPage.styles";
import { useNavigate } from "react-router-dom";
import { getAllClients } from "../../../utils/firebase";
import { UserContext } from "../../../context/user.context";
import moment from "moment";

export default function DashClients() {
  const { currentUserInfo } = useContext(UserContext);
  const [clients, setClients] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getClients = async () => {
      const allClients = await getAllClients(currentUserInfo.company);
      setClients(allClients);
    }
    currentUserInfo && getClients();
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
          <Th>Salesperson</Th>
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
                <Th>
                  {client.firstName} {""}
                  {client.lastName}
                </Th>
                <Td>{client.email}</Td>
                <Td>{client.salesperson}</Td>
                <Td>{client.status}</Td>
                <Td>
                  {moment
                    .unix(client.createdAt)
                    .subtract(1969, "years")
                    .format("MMMM Do YYYY")}
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      ) : (
        <Tbody>
          <Tr>
            <Th>Loading</Th>
          </Tr>
        </Tbody>
      )}
    </DTable>
  );
}
