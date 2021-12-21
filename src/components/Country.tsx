import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Tooltip from "@material-ui/core/Tooltip";
import { AiFillFlag } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { MdShareLocation } from "react-icons/md";

import Weather from "./Weather";

type CountryProps = {
  country: {
    name: string;
    population: number;
    latlng: string[];
    flag: string;
  };
  countryName: string;
  countryCapital: string;
  weather: object;
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const Country = ({
  country,
  countryName,
  countryCapital,
  weather,
}: CountryProps) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {Object.keys(country).length ? (
        <>
          <Button
            size="medium"
            variant="contained"
            color="primary"
            onClick={handleOpen}
          >
            {Object.keys(country).length > 0 ? country.name : null}
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
          >
            <Box sx={{ ...style, width: 400 }}>
              <h2 id="parent-modal-title">{country.name}</h2>
              <List>
                <ListItem>
                  <Tooltip title="Population">
                    <ListItemAvatar>
                      <IoIosPeople size={"30px"} />
                    </ListItemAvatar>
                  </Tooltip>
                  <ListItemText primary={country.population} />
                </ListItem>
                <ListItem>
                  <Tooltip title="Lat-Lng">
                    <ListItemAvatar>
                      <MdShareLocation size={"30px"} />
                    </ListItemAvatar>
                  </Tooltip>
                  <ListItemText
                    primary={`${country.latlng[0]} - ${country.latlng[1]}`}
                  />
                </ListItem>
                <ListItem>
                  <Tooltip title="flag">
                    <ListItemAvatar>
                      <AiFillFlag size={"30px"} />
                    </ListItemAvatar>
                  </Tooltip>
                  <ListItemText
                    primary={
                      <img src={country.flag} height={"40px"} width={"45px"} />
                    }
                  />
                </ListItem>
              </List>
              <Weather weather={weather} />
            </Box>
          </Modal>
        </>
      ) : null}
    </div>
  );
};

export default Country;
