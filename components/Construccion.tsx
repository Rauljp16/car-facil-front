"use client";

import { useState, useEffect } from "react";

export default function Construccion() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Fecha estimada de finalización (ajusta según necesites)
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 7); // Una semana desde ahora

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const styles = {
    container: {
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#f5f5f5",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
    },
    card: {
      width: "100%",
      maxWidth: "500px",
      backgroundColor: "white",
      borderRadius: "8px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      overflow: "hidden",
    },
    header: {
      padding: "20px",
      textAlign: "center" as const,
    },
    title: {
      fontSize: "24px",
      fontWeight: "bold",
      margin: "10px 0",
      color: "#333",
    },
    content: {
      padding: "0 20px 20px",
    },
    text: {
      textAlign: "center" as const,
      color: "#666",
      lineHeight: "1.5",
    },
    countdownContainer: {
      display: "flex",
      justifyContent: "center",
      gap: "16px",
      margin: "24px 0",
    },
    countdownItem: {
      display: "flex",
      flexDirection: "column" as const,
      alignItems: "center",
    },
    countdownNumber: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#333",
    },
    countdownLabel: {
      fontSize: "12px",
      color: "#777",
    },
    separator: {
      fontSize: "24px",
      color: "#333",
    },
    footer: {
      padding: "15px 20px",
      borderTop: "1px solid #eee",
      textAlign: "center" as const,
      color: "#777",
      fontSize: "14px",
    },
    constructionSymbol: {
      fontSize: "48px",
      margin: "0 auto",
      display: "block",
      textAlign: "center" as const,
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <div style={styles.constructionSymbol}>🚧</div>
          <h1 style={styles.title}>Sitio en construcción</h1>
        </div>
        <div style={styles.content}>
          <p style={styles.text}>
            Estamos trabajando para mejorar tu experiencia. Disculpa las
            molestias. Volveremos pronto con un nuevo diseño y funcionalidades.
          </p>

          <div style={styles.countdownContainer}>
            <div style={styles.countdownItem}>
              <span style={styles.countdownNumber}>{countdown.days}</span>
              <span style={styles.countdownLabel}>Días</span>
            </div>
            <span style={styles.separator}>:</span>
            <div style={styles.countdownItem}>
              <span style={styles.countdownNumber}>{countdown.hours}</span>
              <span style={styles.countdownLabel}>Horas</span>
            </div>
            <span style={styles.separator}>:</span>
            <div style={styles.countdownItem}>
              <span style={styles.countdownNumber}>{countdown.minutes}</span>
              <span style={styles.countdownLabel}>Minutos</span>
            </div>
            <span style={styles.separator}>:</span>
            <div style={styles.countdownItem}>
              <span style={styles.countdownNumber}>{countdown.seconds}</span>
              <span style={styles.countdownLabel}>Segundos</span>
            </div>
          </div>
        </div>
        <div style={styles.footer}>Trabajando duro para volver pronto 🔧</div>
      </div>
    </div>
  );
}
