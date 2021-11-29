import React, {useState, useEffect} from "react";
import "./home.css";
import axios from "axios";

// mui
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {CardActionArea} from "@mui/material";

// api
import {mongoServer} from "./../../api/apiUrl";

const Home = () => {
  const [data, setData] = useState([]); // for grabbing all vidoes
  const [loading, setLoading] = useState(true); // intially show indicator

  useEffect(() => {
    axios
      .get(`${mongoServer}/videos`)
      .then(res => {
        console.log(res.data);
        setLoading(false); // stop loading
        setData(res.data); // grab data from server
      })
      .catch(err => console.log(err));

    // cleanup
    return () => {
      setData([]);
      setLoading(true);
    };
  }, []); // no dependencies, shoot function upon rendering component

  return (
    <div className='video-container'>
      {/* loop through array and grab items */}
      {data.map(item => (
        <Card sx={{maxWidth: 345, height: 400}}  style={{margin: 15}}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image={item.thumbnail}
              alt={item.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Posted on: {Date(item.dateCreated).substring(0, 15)}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
};

export default Home;
