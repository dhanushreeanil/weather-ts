import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Tooltip from "@material-ui/core/Tooltip";
import { FaTemperatureHigh } from "react-icons/fa";
import { BsFillCloudSleetFill } from "react-icons/bs";
import { FiWind } from "react-icons/fi";
import { GiCapitol } from "react-icons/gi";

type WeatherProps = {
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

const Weather = ({ weather }: WeatherProps) => {
  console.log("weather", weather);

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Tooltip title="Capital">
        <Button
          size="medium"
          variant="contained"
          color="primary"
          onClick={handleOpen}
        >
          {weather.location.name}
        </Button>
      </Tooltip>

      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          {Object.keys(weather).length > 0 ? (
            <>
              <h2 id="child-modal-title">Weather Info</h2>
              <List>
                <ListItem>
                  <Tooltip title="Temperature">
                    <ListItemAvatar>
                      <FaTemperatureHigh size={"25px"} />
                    </ListItemAvatar>
                  </Tooltip>
                  <ListItemText
                    primary={
                      weather.current
                        ? `${weather.current.temperature} C`
                        : null
                    }
                  />
                </ListItem>
                <ListItem>
                  <Tooltip title="Weather">
                    <ListItemAvatar>
                      <img
                        src={weather.current.weather_icons[0]}
                        height={"35px"}
                        width={"40px"}
                      />
                    </ListItemAvatar>
                  </Tooltip>
                  <ListItemText
                    primary={
                      weather.current.weather_descriptions
                        ? weather.current.weather_descriptions[0]
                        : null
                    }
                  />
                </ListItem>
                <ListItem>
                  <Tooltip title="Wind Speed">
                    <ListItemAvatar>
                      <FiWind size={"25px"} />
                    </ListItemAvatar>
                  </Tooltip>
                  <ListItemText
                    primary={`${weather.current.wind_speed} km/h`}
                  />
                </ListItem>
                <ListItem>
                  <Tooltip title="Precip">
                    <ListItemAvatar>
                      <BsFillCloudSleetFill size={"25px"} />
                    </ListItemAvatar>
                  </Tooltip>
                  <ListItemText primary={`${weather.current.precip} %`} />
                </ListItem>
              </List>
              <Button
                color="primary"
                size="medium"
                variant="contained"
                onClick={handleClose}
              >
                Close
              </Button>
            </>
          ) : null}
        </Box>
      </Modal>
    </React.Fragment>
  );
};

export default Weather;
