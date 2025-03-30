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


// Fonction pour récupérer tous les projets
export const getProjets = async () => {
    try {
        const response = await fetch(`${API_URL}/projets`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching projects:", error);
        throw error;
    }
};

// Fonction pour récupérer les actualités
export const getActualites = async () => {
    try {
        const response = await fetch(`${API_URL}/actualites`);
        if (!response.ok) {
            throw new Error("Erreur lors de la récupération des actualités");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Erreur lors de la récupération des actualités:", error);
        throw error;
    }
};

export const addActualite = async (formData) => {
    const response = await fetch(`${API_URL}/actualites`, {
        method: 'POST',
        // Ne pas mettre le header Content-Type, le navigateur le fera automatiquement
        // avec la boundary correcte pour FormData
        body: formData // FormData déjà créé dans le composant
    });
    
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to add actualite');
    }
    return response.json();
};

export const updateActualite = async (id, data) => {
    const response = await fetch(`${API_URL}/actualites/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return response.json();
};



// Fonction pour récupérer tous les documents
export const getDocuments = async () => {
    try {
        const response = await fetch(`${API_URL}/documents`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching documents:", error);
        throw error;
    }
};

// Fonction pour créer un nouveau document
export const createDocument = async (numeroDeActe, anneeDeNaissance) => {
    try {
        const response = await fetch(`${API_URL}/documents`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                numero_de_acte: numeroDeActe,
                annee_de_naissance: anneeDeNaissance,
            }),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error creating document:", error);
        throw error;
    }
};

// Fonction pour mettre à jour un document
export const updateDocument = async (id, numeroDeActe, anneeDeNaissance) => {
    try {
        const response = await fetch(`${API_URL}/documents/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                numero_de_acte: numeroDeActe,
                annee_de_naissance: anneeDeNaissance,
            }),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error updating document:", error);
        throw error;
    }
};

// Fonction pour supprimer un document
export const deleteDocument = async (id) => {
    try {
        const response = await fetch(`${API_URL}/documents/${id}`, {
            method: "DELETE",
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error deleting document:", error);
        throw error;
    }
};

// Exportez toutes les fonctions
export { API_URL};



// Récupérer tous les rendez-vous
export const getRendezVous = async () => {
    try {
      const response = await fetch(`${API_URL}/rendez-vous`);
      if (!response.ok) throw new Error('Erreur réseau');
      return await response.json();
    } catch (error) {
      console.error("Erreur API:", error);
      throw error;
    }
  };
  
  export const updateRendezVous = async (id, data) => {
    try {
      const response = await fetch(`${API_URL}/rendez-vous/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });
      if (!response.ok) throw new Error('Erreur lors de la mise à jour');
      return await response.json();
    } catch (error) {
      console.error("Erreur API:", error);
      throw error;
    }
  };

// prise de un nouveau rendez-vous
export const createRendezVous = async (rendezVousData) => {
    try {
        const response = await fetch(`${API_URL}/rendez-vous`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(rendezVousData),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Erreur lors de la création du rendez-vous :", error);
        throw error;
    }
};

// Fonction pour supprimer un rendez-vous
export const deleteRendezVous = async (id) => {
    try {
      const response = await fetch(`${API_URL}/rendez-vous/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Erreur lors de la suppression');
      return await response.json();
    } catch (error) {
      console.error("Erreur API:", error);
      throw error;
    }
  };

// Fonction pour supprimer une idée
export const deleteBoiteIdee = async (id) => {
    try {
        const response = await fetch(`${API_URL}/boite-a-idees/${id}`, {
            method: "DELETE",
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Erreur lors de la suppression de l'idée :", error);
        throw error;
    }
};

// Fonction pour supprimer un projet
export const deleteProjet = async (id) => {
    try {
        const response = await fetch(`${API_URL}/projets/${id}`, {
            method: "DELETE",
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Erreur lors de la suppression du projet :", error);
        throw error;
    }
};

// Fonction pour supprimer une actualité
export const deleteActualite = async (id) => {
    try {
        const response = await fetch(`${API_URL}/actualites/${id}`, {
            method: "DELETE",
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Erreur lors de la suppression de l'actualité :", error);
        throw error;
    }
};