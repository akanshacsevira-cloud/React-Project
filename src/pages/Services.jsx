function Services() {

const styles={

main:{
padding:"80px",
textAlign:"center",
background:"#f5f7fa"
},

cards:{
display:"flex",
justifyContent:"center",
gap:"30px",
marginTop:"40px"
},

card:{
width:"300px",
background:"white",
padding:"15px",
borderRadius:"12px",
boxShadow:"0 0 10px rgba(0,0,0,.2)"
},

img:{
width:"100%",
height:"220px",
objectFit:"cover",
borderRadius:"10px"
}

};

return(
<div style={styles.main}>

<h1>Our Services</h1>

<div style={styles.cards}>

<div style={styles.card}>

<img
style={styles.img}
src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
/>

<h3>Exterior Wash</h3>

</div>

<div style={styles.card}>

<img
style={styles.img}
src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7"
/>

<h3>Interior Cleaning</h3>

</div>

<div style={styles.card}>

<img
style={styles.img}
src="https://images.unsplash.com/photo-1553440569-bcc63803a83d"
/>

<h3>Full Detailing</h3>

</div>

</div>

</div>
);

}

export default Services;