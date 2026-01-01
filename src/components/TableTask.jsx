import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ButtonDelete from "./ButtonDelete";
import { useTasks } from "../context/TaskContext";

const columns = [
  { id: "id", label: "ID", minWidth: 80 },
  { id: "title", label: "Title", minWidth: 120 },
  { id: "description", label: "Description", minWidth: 130, maxWidth: 160 },
];

export default function TableTasks() {
  const { tasks, deleteTask } = useTasks();
  return (
    <TableContainer
      sx={{
        maxWidth: "90%",
        borderRadius: "15px",
        mb: 2,
      }}
    >
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.id}
                align={column.align}
                style={{ minWidth: column.minWidth }}
                sx={{
                  bgcolor: "#240046",
                  color: "#C77DFF",
                  borderBottom: "2px solid #7B2CBF",
                  textAlign: "center",
                }}
              >
                {column.label}
              </TableCell>
            ))}
            <TableCell
              sx={{
                bgcolor: "#240046",
                color: "#C77DFF",
                borderBottom: "2px solid #7B2CBF",
                textAlign: "center",
              }}
              style={{ minWidth: 30 }}
            >
              Delete
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.map((task) => {
            return (
              <TableRow
                hover
                role="checkbox"
                tabIndex={-1}
                key={task.id}
                sx={{
                  "& td": {
                    backgroundColor: "#9D4EDD",
                    transition: "background-color 0.2s ease",
                    textAlign: "center",
                  },

                  "&:hover td": {
                    backgroundColor: "#C77DFF",
                  },
                }}
              >
                {columns.map((column) => {
                  const value = task[column.id];
                  return (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      sx={{
                        borderBottom: "1px solid #5A189A",
                      }}
                    >
                      {column.format && typeof value === "number"
                        ? column.format(value)
                        : value}
                    </TableCell>
                  );
                })}
                <TableCell
                  sx={{
                    borderBottom: "1px solid #5A189A",
                  }}
                >
                  <ButtonDelete onClick={() => deleteTask(task.id)}>
                    Delete
                  </ButtonDelete>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
