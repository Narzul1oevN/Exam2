import "./App.css";
import Nav from "./components/navBar/nav";
import Sec1 from "./components/secion1/sec1";
import Sec2 from "./components/secion2/sec2";

// images
import logo from "./assets/logo.png";
import secimg1 from "./assets/Rectangle.png";
import sec1img2 from "./assets/Rectangle (1).png";
import rfame from "./assets/Frame.png";
import sec2imag from "./assets/36 (3).png";
import sec3image from "./assets/36 (2).png";
import logo1 from "./assets/firs.png";
import logo2 from "./assets/Rectangle (2).png";
import logo3 from "./assets/Rectangle (3).png";
import logo4 from "./assets/Rectangle (4).png";
import logo5 from "./assets/Rectangle (5).png";
import logo6 from "./assets/Rectangle (6).png";
import sec4 from "./assets/Rectangle (7).png";
import sec4i from "./assets/Rectangle (8).png";
import sec42 from "./assets/Rectangle (9).png";
import sec5logo from "./assets/36 (1).png";
import { Box, Dialog, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";
import get from "./assets/get.png";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { styled } from "@mui/material/styles";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const App = () => {
  const [data, setData] = useState([
    {
      id: 1,
      image:
        "https://avatars.mds.yandex.net/i?id=e7bd0468683e38de0202295ab2c258bbb2466775-5160619-images-thumbs&n=13",
      title: "Сниженное загрязнение",
      status: false,
      lorem:
        "При оптимизации логистики требуется меньше поездок, что приводит к снижению выбросов CO2. Выбрасываемый CO2 контролируется, что позволяет ставить цели и вносить ощутимые улучшения.",
    },

    {
      id: 2,
      status: true,
      image:
        "https://avatars.mds.yandex.net/i?id=4219dc52e8b1bc9817859b6ac5f1c258ea06f7ad-5859251-images-thumbs&n=13",
      title: "Улучшенное управление отходами",
      lorem:
        "При оптимизации логистики требуется меньше поездок, что приводит к снижению выбросов CO2. Выбрасываемый CO2 контролируется, что позволяет ставить цели и вносить ощутимые улучшения.",
    },

    {
      id: 3,
      status: false,
      image:
        "https://avatars.mds.yandex.net/i?id=ec84d5b1f679b3fde1011430f111076db1d495e0-5513776-images-thumbs&n=13",
      title: "Улучшенное влияние на общество",
      lorem:
        "При оптимизации логистики требуется меньше поездок, что приводит к снижению выбросов CO2. Выбрасываемый CO2 контролируется, что позволяет ставить цели и вносить ощутимые улучшения.",
    },
  ]);
  const [search, setSearch] = useState("");
  const [title, setTitle] = useState("");
  const [lorem, setLorem] = useState("");
  const [image, setImage] = useState("");
  const [age, setAge] = useState("all");

  const [editTitle, setEdittitle] = useState("");
  const [editImage, setEditImage] = useState("");
  const [editLorem, setEditLorem] = useState("");

  const remove = (id) => {
    setData(data.filter((el) => el.id != id));
  };

  const [open, setOpen] = useState(false);
  const [openedit, setOpenedit] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpenEditModal = () => {
    setOpenedit(true);
  };
  const handleCloseEditModal = () => {
    setOpenedit(false);
  };

  const addUser = () => {
    let newUser = {
      id: Date.now(),
      title: title,
      image: image,
      lorem: lorem,
    };
    data.push(newUser);
    setData(data);
    setTitle("");
    setImage("");
    setLorem("");
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const editUser = (id) => {
    data.map((elem) => {
      if (elem.id === id) {
        setEditImage(elem.image);
        setEdittitle(elem.title);
        setEditLorem(elem.lorem);
      }
      return elem;
    });
  };

  return (
    <div>
      <Nav logo={logo} />
      <Sec1
        secImage={secimg1}
        secImage1={sec1img2}
        seccardimage={rfame}
        sec1h1="Повышение эффективности"
        sec1p="Эффективные проекты стоят дешевле и завершаются в срок."
      />
      <Sec2
        sec2h1="Строительство - это хаос"
        sec2p="Хаос может быть удивительной творческой силой, воздвигающая новые здания из пыли. Хаос вызывает несчастные случаи, задержки и потери. Он вводит проекты в стресс и разочарование. Это означает, что вы действительно не контролируете ситуацию."
        sec2img={sec2imag}
        sec2footerh1="Пора навести порядок на вашей стройплощадке и взять под контроль свой проект"
      />
      <div className="secion3">
        <div className="sec3left">
          <h2>
            Мы заботимся о доставке на <br /> стройплощадку и о людях, <br />{" "}
            которые на них рассчитывают
          </h2>
          <p>
            Мы знаем всё о гордости от сияющего нового здания. <br /> Нам также
            известно всё о разочаровании от попыток <br /> завершить проект в
            срок и в рамках бюджета.
          </p>
          <p className="background">Мы здесь, чтобы помочь.</p>
        </div>
        <img className="sec3image" src={sec3image} alt="" />
      </div>
      <div className="logo">
        <img src={logo1} alt="" />
        <img src={logo2} alt="" />
        <img src={logo3} alt="" />
        <img src={logo4} alt="" />
        <img src={logo5} alt="" />
        <img src={logo6} alt="" />
      </div>
      <div className="secion4">
        <h1 className="sec4h1">Что такое СтройКонтроль?</h1>
        <p className="sec4lorem">
          СтройКонтроль - это интеллектуальная система управления доставкой,
          предоставляющая информацию и контроль материалов на сложных
          строительных площадках в режиме реального времени.
        </p>
        <div className="sec4card">
          <div className="sec4cardtitle">
            <h2>Отслеживайте доставку по всей цепочке поставок</h2>
            <p>
              От поставщика до субподрядчика - вы всегда знаете, где находятся
              ваши материалы, благодаря чему обычные отходы уходят в прошлое и
              сокращаются несчастные случаи на месте.
            </p>
          </div>
          <img src={sec4} alt="" />
        </div>

        <div className="sec4card">
          <img className="sec4imah" src={sec4i} alt="" />
          <div className="sec4cardtitle">
            <h2>Отслеживайте доставку по всей цепочке поставок</h2>
            <p>
              От поставщика до субподрядчика - вы всегда знаете, где находятся
              ваши материалы, благодаря чему обычные отходы уходят в прошлое и
              сокращаются несчастные случаи на месте.
            </p>
          </div>
        </div>

        <div className="sec4card">
          <div className="sec4cardtitle">
            <h2>Отслеживайте доставку по всей цепочке поставок</h2>
            <p>
              От поставщика до субподрядчика - вы всегда знаете, где находятся
              ваши материалы, благодаря чему обычные отходы уходят в прошлое и
              сокращаются несчастные случаи на месте.
            </p>
          </div>
          <img src={sec42} alt="" />
        </div>
      </div>
      <div className="secion5">
        <h1 className="sec5h1">Доставка стала проще</h1>
        <p className="sec5lorem">
          Мы позаботимся обо всех ваших различных поставках и их многочисленных
          специализированных требованиях к разгрузке.
        </p>
        <div className="sec5box">
          <div className="sec5cardddd">
            <img src={sec5logo} alt="" />
            <div>
              <h3>Бетон</h3>
              <p>
                Поставки бетона точно планируются, а его состояние
                контролируется, что обеспечивает максимально возможное время для
                установки.
              </p>
            </div>
          </div>

          <div className="sec5cardddd">
            <img src={sec5logo} alt="" />
            <div>
              <h3>Бетон</h3>
              <p>
                Поставки бетона точно планируются, а его состояние
                контролируется, что обеспечивает максимально возможное время для
                установки.
              </p>
            </div>
          </div>

          <div className="sec5cardddd">
            <img src={sec5logo} alt="" />
            <div>
              <h3>Бетон</h3>
              <p>
                Поставки бетона точно планируются, а его состояние
                контролируется, что обеспечивает максимально возможное время для
                установки.
              </p>
            </div>
          </div>
          <div className="sec5cardddd">
            <img src={sec5logo} alt="" />
            <div>
              <h3>Бетон</h3>
              <p>
                Поставки бетона точно планируются, а его состояние
                контролируется, что обеспечивает максимально возможное время для
                установки.
              </p>
            </div>
          </div>
          <div className="sec5cardddd">
            <img src={sec5logo} alt="" />
            <div>
              <h3>Бетон</h3>
              <p>
                Поставки бетона точно планируются, а его состояние
                контролируется, что обеспечивает максимально возможное время для
                установки.
              </p>
            </div>
          </div>
          <div className="sec5cardddd">
            <img src={sec5logo} alt="" />
            <div>
              <h3>Бетон</h3>
              <p>
                Поставки бетона точно планируются, а его состояние
                контролируется, что обеспечивает максимально возможное время для
                установки.
              </p>
            </div>
          </div>
          <div className="sec5cardddd">
            <img src={sec5logo} alt="" />
            <div>
              <h3>Бетон</h3>
              <p>
                Поставки бетона точно планируются, а его состояние
                контролируется, что обеспечивает максимально возможное время для
                установки.
              </p>
            </div>
          </div>
          <div className="sec5cardddd">
            <img src={sec5logo} alt="" />
            <div>
              <h3>Бетон</h3>
              <p>
                Поставки бетона точно планируются, а его состояние
                контролируется, что обеспечивает максимально возможное время для
                установки.
              </p>
            </div>
          </div>
          <div className="sec5cardddd">
            <img src={sec5logo} alt="" />
            <div>
              <h3>Бетон</h3>
              <p>
                Поставки бетона точно планируются, а его состояние
                контролируется, что обеспечивает максимально возможное время для
                установки.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="withcard">
        <h1>Надёжность</h1>
        <p>
          Благодаря надёжному строительству выигрывают все - муниципальные
          органы выполняют свои обязанности перед гражданами, инвесторы получают
          сертификаты своих проектов, а генеральные подрядчики получают
          повышенную репутацию.
        </p>
      </div>
      <Box>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-evenly",
            alignItems:"center"
          }}
        >
          <TextField
            id="outlined-basic"
            label="Search..."
            variant="outlined"
            size="small"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <FormControl size="small" sx={{ width: "100px" }}>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Status"
              onChange={handleChange}
            >
              <MenuItem value={"all"}>All</MenuItem>
              <MenuItem value={true}>Active</MenuItem>
              <MenuItem value={false}>Disabled</MenuItem>
            </Select>
          </FormControl>
          <Button
            sx={{ width: "150px" }}
            variant="contained"
            onClick={() => {
              handleClickOpen();
            }}
          >
            {" "}
            + Add Card
          </Button>
        </Box>

        <Box className="cardd">
          {data. filter((el) => age == "all" ? el : age == true ? el.status == true : el.status == false)
            .filter((elem) =>
              elem.title
                .toLowerCase()
                .trim()
                .includes(search.toLocaleLowerCase())
            )
            .map((element) => {
              return (
                <Card key={element.id} sx={{ maxWidth: 345, width: "400px" }}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={element.image}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {element.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {element.lorem} 
                    </Typography>
                    <Typography>
                    {element.status ? "Active" : "Disabled"}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      onClick={() => {
                        handleClickOpenEditModal(), editUser(element.id);
                      }}
                    >
                      Edit
                    </Button>
                    <Button size="small" onClick={() => remove(element.id)}>
                      Delete
                    </Button>
                  </CardActions>
                </Card>
              );
            })}
        </Box>

        {/* add */}
        <Box sx={{ width: "500px", marginBottom: "50px" }}>
          <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
          >
            <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
              Modal title
            </DialogTitle>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                width: "50px",
                height: "50px",
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
            <DialogContent
              sx={{ display: "flex", flexDirection: "column", gap: "30px" }}
              dividers
            >
              <TextField
                label="Image..."
                size="small"
                value={image}
                onChange={(event) => setImage(event.target.value)}
              ></TextField>
              <TextField
                label="Title..."
                size="small"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              ></TextField>
              <TextField
                label="Discription..."
                size="small"
                value={lorem}
                onChange={(event) => setLorem(event.target.value)}
              ></TextField>
            </DialogContent>
            <DialogActions>
              <Button
                autoFocus
                onClick={() => {
                  handleClose(), addUser();
                }}
              >
                Save
              </Button>
            </DialogActions>
          </BootstrapDialog>
        </Box>

        {/* edit */}

        <Box sx={{ width: "500px", marginBottom: "50px" }}>
          <BootstrapDialog
            onClose={handleCloseEditModal}
            aria-labelledby="customized-dialog-title"
            open={openedit}
          >
            <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
              Modal title
            </DialogTitle>
            <IconButton
              aria-label="close"
              onClick={handleCloseEditModal}
              sx={{
                width: "50px",
                height: "50px",
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
            <DialogContent
              sx={{ display: "flex", flexDirection: "column", gap: "30px" }}
              dividers
            >
              <TextField
                label="Image..."
                size="small"
                value={editImage}
                onChange={(event) => setEditImage(event.target.value)}
              ></TextField>
              <TextField
                label="Title..."
                size="small"
                value={editTitle}
                onChange={(event) => setEdittitle(event.target.value)}
              ></TextField>
              <TextField
                label="Discription..."
                size="small"
                value={editLorem}
                onChange={(event) => setEditLorem(event.target.value)}
              ></TextField>
            </DialogContent>
            <DialogActions>
              <Button
                autoFocus
                onClick={() => {
                 editUser();
                }}
              >
                Save
              </Button>
            </DialogActions>
          </BootstrapDialog>
        </Box>
      </Box>
    </div>
  );
};

export default App;
