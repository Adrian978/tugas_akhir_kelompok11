import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import Modal from "@material-ui/core/Modal";
import Box from "@material-ui/core/Box";

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: '#89C4F4',
	borderRadius: '25px',
	p: 4,
};

const DetailMobil = createContext();

export default function Mobil() {
	const [mobil, setMobil] = useState([]);
	const [name, setName] = useState('');
	const [price, setPrice] = useState('');
	const [description, setDescription] = useState('');
	const [open, setOpen] = useState(false);
	const handleClose = () => setOpen(false);

	useEffect(() => {
		axios({
			method: "get",
			url: "http://localhost:3000/data",
			headers: {
				accept: "*/*",
			},
		})

			.then((data) => {
				setMobil(data.data);
			})

			.catch((error) => {
				console.log(error);
			})
	}, [])

	return (
		<div style={{ backgroundColor: "#FFFAFA" }}>
			<marquee style={{ fontWeight: "bold", padding: 10 }} bgcolor="FAF0E6" align="center" direction="left" scrollamount="10"> SELAMAT DATANG DI AKAMSI CAR, PUSAT JUAL BELI MOBIL BEKAS TERMURAH SE INDONESIA</marquee>
			<div style={{ marginTop: 20 }}>
				<div className="marquee" >
					<center> <h1>----- MOBIL BEKAS -----</h1> </center>
					<hr />
				</div>
			</div>
			<Grid container
				md={11}
				spacing={4}
				style={{ margin: "auto", backgroundColor: "#F9F871" }}
				direction="row"
				justifyContent="flex-start"
				alignItems="strech" >

				{mobil.map((results) => {
					return (
						<Grid item key={results.name} md={3}>
							<Card>
								<CardActionArea onClick={() => { setOpen(true); setName(results.name); setPrice(results.price); setDescription(results.description) }}>
									<CardMedia
										component="img"
										height="150px"
										margin="auto"
										paddingTop="5%"
										borderRadius="8px"
										image={results.image}
									/>
									<Link to="/kasir">
										<CardContent style={{ backgroundColor: "#191970", textAlign: "center", color: "#ededed" }}>
											<Typography style={{ fontWeight: "bold" }}> <br />{results.name}</Typography>
											<Typography> Harga : {results.price} </Typography>
										</CardContent>
									</Link>
								</CardActionArea>
							</Card>
						</Grid>
					);
				})}
			</Grid>
			<DetailMobil.Provider value={{ name: name, price: price, description: description }}>
				<div>
					<Modal
						open={open}
						onClose={handleClose}
						aria-labelledby="modal-modal-mobil"
						aria-describedby="modal-modal-detail"
					>
						<Detail />
					</Modal>
				</div>
			</DetailMobil.Provider>
		</div >
	);
}

function Detail() {
	const info = useContext(DetailMobil);
	return (
		<Box sx={style}>
			<Typography id="modal-modal-mobil" variant="h6" component="h2">
				{info.name}
			</Typography>
			<Typography id="modal-modal-detail" sx={{ mt: 1 }}>
				Harga: {info.price}
			</Typography>
			<Typography id="modal-modal-detail" sx={{ mt: 1 }}>
				{info.description}
			</Typography>
		</Box>
	);
}