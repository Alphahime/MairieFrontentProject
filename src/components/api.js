// src/components/api.js

const API_URL = "http://127.0.0.1:8000/api";

// Fonction pour la connexion
export const loginUser = async (email, password) => {
    try {
        const response = await fetch(`${API_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error during login:", error);
        throw error;
    }
};

// Fonction pour récupérer toutes les idées
export const getBoiteIdees = async () => {
    try {
        const response = await fetch(`${API_URL}/boite-a-idees`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching ideas:", error);
        throw error;
    }
};

// Fonction pour soumettre une idée
export const submitBoiteIdee = async (titre, description, email, statut) => {
    try {
        const response = await fetch(`${API_URL}/boite-a-idees`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                titre,
                description,
                email,
                statut,
                date_soumission: new Date().toISOString(), // Formater la date de soumission
                auteur: "Utilisateur", // À adapter selon l'utilisateur connecté
            }),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error submitting idea:", error);
        throw error;
    }
};
