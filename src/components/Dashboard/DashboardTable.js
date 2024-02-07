import { Table } from "reactstrap";
import TableRow from "./TableRow";

const DashboardTable = (props) => {
  return (
    <div className="overflow-auto rounded-3">
      <Table className="table-hover align-middle border" responsive>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Instructor</th>
            <th>Duration</th>
            <th>Level</th>
            <th>Description</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.courses.map((course) => (
            <TableRow {...course} key={course.id} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default DashboardTable;
