import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Toolbar from "@mui/material/Toolbar";
import EmptyTableMessage from "../components/emptyTableMessage/emptyTableMessage";
import "./home.css";

interface HomeTableProps {
  videos: [string, string][];
  url: string;
}
interface HomeTableState {}
class HomeTable extends React.Component<HomeTableProps, HomeTableState> {
  constructor(props: HomeTableProps) {
    super(props);
    this.state = {};
  }

  render() {
    const videoHeaders: string[] = ["Name", "Url"];
    const videoHeaderClasses: string[] = ["name", ""];

    const emptyTable = !this.props.videos.length;
    const emptyTableMessage = "No Removed Videos";

    const youtubePrefix = "https://www.youtube.com/watch?v=";

    return (
      <div className="home-table">
        <TableContainer component={Paper}>
          <Toolbar className="table-header">
            {`${this.props.videos.length} Removed Video${
              this.props.videos.length !== 1 ? "s" : ""
            } From`}
            &nbsp;
            <a href={this.props.url}>{this.props.url}</a>
          </Toolbar>
          <Table>
            <TableHead>
              <TableRow>
                {videoHeaders.map((header: string, i: number) => {
                  return (
                    <TableCell key={header} className={videoHeaderClasses[i]}>
                      {header}
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.videos.map((video: [string, string]) => {
                return (
                  <TableRow key={video[1]}>
                    <TableCell>{video[0]}</TableCell>
                    <TableCell>
                      {
                        <a href={youtubePrefix + video[1]}>
                          {youtubePrefix + video[1]}
                        </a>
                      }
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <EmptyTableMessage empty={emptyTable} message={emptyTableMessage} />
      </div>
    );
  }
}

export default HomeTable;
