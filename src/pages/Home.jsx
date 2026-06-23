function Home() {
  const styles = {
    hero: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "80px",
      gap: "60px",
      minHeight: "80vh",
      background: "#f5f7fa",
    },

    img: {
      width: "600px",
      borderRadius: "15px",
    },

    content: {
      width: "450px",
    },

    btn: {
      padding: "14px 28px",
      background: "#1e90ff",
      color: "white",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      marginTop: "20px",
    },
  };

  return (
    <section style={styles.hero}>
      <div style={styles.content}>
        <h1>Premium Car Wash Services</h1>

        <p>
          Give your car a premium shine with professional
          washing and detailing services.
        </p>

        <button style={styles.btn}>
          Book Appointment
        </button>
      </div>

      <img
        style={styles.img}
        src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyJTIwd2FzaHxlbnwwfHwwfHx8MA%3D%3D"
        alt=""
      />
    </section>
  );
}

export default Home;