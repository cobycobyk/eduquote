import React, {useContext, useEffect, useState} from "react";
import { DMainBG, DTable, Tbody, Td, Th, Thead, Tr } from "../DashboardPage.styles";
import { useNavigate } from "react-router-dom";
import { getAllClients } from "../../../utils/firebase";
import { UserContext } from "../../../context/user.context";
import moment from "moment";
import { BoldDark, TextDividerSolid2Dark } from "../../../assets/css/custom.styles";
import { TableCard, TableCardBody, TableContainer, TableTable, TableTopRow, TBodyDark, TDDark, THDark, THeadDark, TRDark } from "../../../assets/css/table.styles";

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
      {clients &&
        Object.keys(clients).map((role, key) => {
          return (
            <React.Fragment key={key}>
              <DMainBG>
                {role === `client` && <BoldDark>ALL CLIENTS LIST</BoldDark>}
                {role === `salesPartnerRep` && (
                  <BoldDark>SALES PARTNER REPS</BoldDark>
                )}
                {role === `companyRep` && <BoldDark>COLLEGUES</BoldDark>}
                <TextDividerSolid2Dark />
                <TableCard>
                  <TableCardBody>
                    <TableContainer>
                      <TableTable>
                        <THeadDark>
                          <TRDark>
                            <THDark>Name</THDark>
                            <THDark>Email</THDark>
                            <THDark>Institution</THDark>
                            <THDark>Status</THDark>
                            <THDark>Created</THDark>
                            <THDark>Actions</THDark>
                          </TRDark>
                        </THeadDark>
                        <TBodyDark>
                          {clients[role].map((client, key) => {
                            return (
                              <TRDark
                                key={key}
                                onClick={() => handleClick(client)}
                              >
                                <TDDark>
                                  {client.firstName} {""}
                                  {client.lastName}
                                </TDDark>
                                <TDDark>{client.email}</TDDark>
                                <TDDark>{client.institution}</TDDark>
                                <TDDark>{client.status}</TDDark>
                                <TDDark>
                                  {moment
                                    .unix(client.createdAt)
                                    .subtract(1969, "years")
                                    .format("MMMM Do YYYY")}
                                </TDDark>
                              </TRDark>
                            );
                          })}
                        </TBodyDark>
                      </TableTable>
                    </TableContainer>
                  </TableCardBody>
                </TableCard>
              </DMainBG>
            </React.Fragment>
          );
        })}
    </React.Fragment>
  );
}
