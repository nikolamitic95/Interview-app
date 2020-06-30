import React from 'react';

import { Table, Container, Row, Col } from 'react-bootstrap';
import { convertDate } from '../../../shared/utilities';


const ReportInfo = ({ reports, candidateId }) => {

    let thisCandidatesReports = reports.filter(report => report.candidateId === Number(candidateId))

    return (
        <Container>
            <Row>
                <Col>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>Company</th>
                                <th>Interview Date</th>
                                <th>Status</th>
                                <th>View</th>
                            </tr>
                        </thead>
                        <tbody>
                            {thisCandidatesReports.map((report) => {
                                return (<tr key={report.id}>
                                    <td>{report.companyName}</td>
                                    <td>{convertDate(report.interviewDate)}</td>
                                    <td>{report.status}</td>
                                    <td width='25px'><i className="fa fa-eye"></i></td>
                                </tr>)
                            })}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}

export { ReportInfo }