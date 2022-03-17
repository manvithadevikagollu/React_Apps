import React, { useEffect, useState } from "react";
import './App.css';
import axios from 'axios';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SearchBar from "material-ui-search-bar";
import { Button } from '@mui/material';


function Pass() {


  const [state, setState] = useState(false);

  // const [search, setSearch] = useState
  // const originalRows = [

  // ];
  const [isfilter, setisFilter] = useState(false);

  const [posts, setPosts] = useState([])
  useEffect(() => {
    console.log("request sent");
    if (!isfilter) {
      axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res => {
          console.log(res.data);
          setPosts(res.data)
          setRows(res.data);

          setState(true);
          console.log("done setting state");


        });

    }

  }, [isfilter]);


  // From here it is search functionality
  // const [posts, setPosts] = useState(originalRows);
  const [filteredRows, setRows] = useState(posts);
  const [searched, setSearched] = useState("");




  const cancelSearch = () => {
    setSearched(" ");
    console.log("Cancled Search")
    setisFilter(false);

    // requestSearch(searched);
  };
  function requestSearch(value) {

    console.log("Search Called " + value);
    const newFilter = posts.filter((row) =>
      row.name.includes(value.toLowerCase()));
    console.log(posts);
    console.log(newFilter);
    setisFilter(true);
    setRows(newFilter);

  }



  if (!state) {
    return (<div>
      <h1> Pleses wait some time.... </h1> </div>);
  } else {
    return (


      <div className="App">

        <SearchBar
          value={searched}
          onChange={(searchVal) => requestSearch(searchVal)}
          onCancelSearch={() => cancelSearch()}
        />
        <div>


          <Button color="primary" variant="contained">
            Search
          </Button>
        </div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>id</TableCell>
                <TableCell align="right">username</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">street</TableCell>
                <TableCell align="right">city</TableCell>
                <TableCell align="right">lat</TableCell>
                <TableCell align="right">lng</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredRows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                  <TableCell align="right">{row.address.street}</TableCell>
                  <TableCell align="right">{row.address.city}</TableCell>
                  <TableCell align="right">{row.address.geo.lat}</TableCell>
                  <TableCell align="right">{row.address.geo.lng}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

      </div >
    );
  }
}

export default Pass;