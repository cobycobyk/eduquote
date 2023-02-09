import React, {useContext, useEffect, useState} from "react";
import { DMainBG, DTable, Tbody, Td, Th, Thead, Tr } from "../DashboardPage.styles";
import { useNavigate } from "react-router-dom";
import { getAllClients } from "../../../utils/firebase";
import { UserContext } from "../../../context/user.context";
import moment from "moment";
import { BoldDark } from "../../../assets/css/custom.styles";

export default function DashClients() {
  const { currentUserInfo } = useContext(UserContext);
  const [clients, setClients] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const getClients = async () => {
      const allClients = await getAllClients(currentUserInfo.company);
      const reducedClients = allClients.reduce((acc, client) => {
        if (acc[client.role]) {
          acc[client.role].push(client);
        } else {
          acc[client.role] = [client]
        }
        return acc;
      }, {})
      setClients(reducedClients)
    }
    currentUserInfo && getClients();
  }, []);

  const handleClick = (client) => {
    navigate(`/dashboard/clients/${client.email}`, {state: {data: client}})
  }
  
  return (
    <React.Fragment>
      {clients && Object.keys(clients).map((role, key) => {
        return (
          <React.Fragment key={key}>
            <DMainBG>
              {role === `client` && <BoldDark>All Clients List</BoldDark>}
              {role === `salesPartnerRep` && (
                <BoldDark>All Sales Partner Reps</BoldDark>
              )}
              {role === `companyRep` && <BoldDark>All Collegues</BoldDark>}
              <DTable>
                <Thead>
                  <Tr>
                    <Th>Name</Th>
                    <Th>Email</Th>
                    <Th>Institution</Th>
                    <Th>Status</Th>
                    <Th>Created</Th>
                    <Th>Actions</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {clients[role].map((client, key) => {
                    return (
                      <Tr key={key} onClick={() => handleClick(client)}>
                        <Th>
                          {client.firstName} {""}
                          {client.lastName}
                        </Th>
                        <Td>{client.email}</Td>
                        <Td>{client.institution}</Td>
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
              </DTable>
            </DMainBG>
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
}
