import React from "react";
import "./ConseilMunicipal.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
const ConseilMunicipal = () => {
  return (
    <div className="bigcontent">
      <Header />
      <div className="conseil-container">
        {/* Section Conseil Municipal */}

        <div className="mobile-back-container">
      <Link 
        to="/" 
        className="mobile-back-button"
        aria-label="Retour au conseil municipal"
      >
        <FaArrowLeft aria-hidden="true" />
        <span>Retour</span>
      </Link>
    </div>
        <section className="conseil-section">
          <h1>Conseil Municipal</h1>
          <p>
            Le Conseil Municipal est l’organe délibérant de la collectivité. À ce titre, il vote les délibérations, adopte les budgets et le compte administratif. Il donne son avis toutes les fois que celui-ci est requis par les lois et règlements ou à la demande du représentant de l'État. Il peut émettre des vœux, par écrit, sur toutes les questions ayant un intérêt local, notamment sur celles concernant le développement économique et social de la commune.
          </p>

          {/* Liste des membres du Conseil Municipal */}
          <div className="membres-conseil">
            <h2>Liste des membres du Conseil Municipal</h2>
            <table>
              <thead>
                <tr>
                  <th>Numéro</th>
                  <th>Prénom</th>
                  <th>Nom</th>
                  <th>Commission</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Maty</td>
                  <td>WADE</td>
                  <td>Membre de commission</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Adjaratou Lucie</td>
                  <td>DIAW</td>
                  <td>Membre de commission</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Khala</td>
                  <td>MBENGUE</td>
                  <td>Membre de commission</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Khalifa Ababacar</td>
                  <td>KAIRE</td>
                  <td>Membre de commission</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Diarra</td>
                  <td>GUEYE</td>
                  <td>Membre de commission</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Fatou</td>
                  <td>DIOP</td>
                  <td>Président de la commission éducation/formation</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Mamadou</td>
                  <td>KENDE</td>
                  <td>Président de la commission jeunesse, sports et loisirs</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Papa Saer</td>
                  <td>NDIAYE</td>
                  <td>Membre de commission</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Mouhamadou Moustapha</td>
                  <td>DIOP</td>
                  <td>Membre de commission</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>Alassane</td>
                  <td>FALL</td>
                  <td>Membre de commission</td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>Babacar</td>
                  <td>NDIAYE</td>
                  <td>Membre de commission</td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>Arame</td>
                  <td>MBAYE</td>
                  <td>Membre de commission</td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>Ousmane</td>
                  <td>DIAW</td>
                  <td>Membre de commission</td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>Aissatou</td>
                  <td>DIOP</td>
                  <td>Membre de commission</td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>Kabirou</td>
                  <td>GUEYE</td>
                  <td>Président de la commission environnement</td>
                </tr>
                <tr>
                  <td>16</td>
                  <td>Magueye</td>
                  <td>GUEYE</td>
                  <td>Membre de commission</td>
                </tr>
                <tr>
                  <td>17</td>
                  <td>Cheikh Ahmed Tidiane</td>
                  <td>SECK</td>
                  <td>Membre de commission</td>
                </tr>
                <tr>
                  <td>18</td>
                  <td>Mbaye</td>
                  <td>SY</td>
                  <td>Président de la commission finance</td>
                </tr>
                <tr>
                  <td>19</td>
                  <td>Ndèye Aminata</td>
                  <td>NDOYE</td>
                  <td>Membre de commission</td>
                </tr>
                <tr>
                  <td>20</td>
                  <td>Khoudia</td>
                  <td>KANE</td>
                  <td>Membre de commission</td>
                </tr>
                <tr>
                  <td>21</td>
                  <td>Alpha Mouhamadou</td>
                  <td>GUEYE</td>
                  <td>Adjoint au maire</td>
                </tr>
                <tr>
                  <td>22</td>
                  <td>El Mamadou</td>
                  <td>NDIAYE</td>
                  <td>Maire</td>
                </tr>
                <tr>
                  <td>23</td>
                  <td>Moustapha</td>
                  <td>SARR</td>
                  <td>Adjoint au maire</td>
                </tr>
                <tr>
                  <td>24</td>
                  <td>Moussa Dame</td>
                  <td>KAIRE</td>
                  <td>Membre de commission</td>
                </tr>
                <tr>
                  <td>25</td>
                  <td>Matar</td>
                  <td>GUEYE</td>
                  <td>Membre de commission</td>
                </tr>
                <tr>
                  <td>26</td>
                  <td>Gora</td>
                  <td>DIAKHATE</td>
                  <td>Membre de commission</td>
                </tr>
                <tr>
                  <td>27</td>
                  <td>Abdou Aziz</td>
                  <td>GUEYE</td>
                  <td>Adjoint au maire</td>
                </tr>
                <tr>
                  <td>28</td>
                  <td>Modou Gaye</td>
                  <td>SAMB</td>
                  <td>Membre de commission</td>
                </tr>
                <tr>
                  <td>29</td>
                  <td>Omar</td>
                  <td>DIOP</td>
                  <td>Président commission Habitat, cadre de vie et assainissement</td>
                </tr>
                <tr>
                  <td>30</td>
                  <td>Fatou</td>
                  <td>DIOP</td>
                  <td>Membre de commission</td>
                </tr>
                <tr>
                  <td>31</td>
                  <td>Chérif Younousse</td>
                  <td>DIENG</td>
                  <td>Président de la commission santé et Hygiènes publiques</td>
                </tr>
                <tr>
                  <td>32</td>
                  <td>Cheikh Marème</td>
                  <td>THIAW</td>
                  <td>Membre de commission</td>
                </tr>
                <tr>
                  <td>33</td>
                  <td>Adji Ndombour</td>
                  <td>LEYE</td>
                  <td>Présidente commission halles et marchés</td>
                </tr>
                <tr>
                  <td>34</td>
                  <td>Diyeu</td>
                  <td>NDIAYE</td>
                  <td>Membre de commission</td>
                </tr>
                <tr>
                  <td>35</td>
                  <td>Pape Moussa</td>
                  <td>SECK</td>
                  <td>Membre de commission</td>
                </tr>
                <tr>
                  <td>36</td>
                  <td>Abdoulaye</td>
                  <td>NIANG</td>
                  <td>Membre de commission</td>
                </tr>
                <tr>
                  <td>37</td>
                  <td>Maïmouna</td>
                  <td>DIOUF</td>
                  <td>Membre de commission</td>
                </tr>
                <tr>
                  <td>38</td>
                  <td>Charlot</td>
                  <td>BADJI</td>
                  <td>Membre de commission</td>
                </tr>
                <tr>
                  <td>39</td>
                  <td>Ndèye</td>
                  <td>SOUMARÉ</td>
                  <td>Membre de commission</td>
                </tr>
                <tr>
                  <td>40</td>
                  <td>Mariama</td>
                  <td>BADJI</td>
                  <td>Membre de commission</td>
                </tr>
                <tr>
                  <td>41</td>
                  <td>Wolimata</td>
                  <td>TOURE</td>
                  <td>Présidente de la commission sociale</td>
                </tr>
                <tr>
                  <td>42</td>
                  <td>Astou</td>
                  <td>NDIAYE</td>
                  <td>Membre de commission</td>
                </tr>
                <tr>
                  <td>43</td>
                  <td>Yakhara</td>
                  <td>SOW</td>
                  <td>Membre de commission</td>
                </tr>
                <tr>
                  <td>44</td>
                  <td>Yacine</td>
                  <td>NIANG</td>
                  <td>Membre de commission</td>
                </tr>
                <tr>
                  <td>45</td>
                  <td>Assane</td>
                  <td>GUEYE</td>
                  <td>Président commission domaine et urbanisme</td>
                </tr>
                <tr>
                  <td>46</td>
                  <td>Cheikh Tidiane</td>
                  <td>DIOUF</td>
                  <td>Président commission culture, art et activités connexes</td>
                </tr>
                <tr>
                  <td>47</td>
                  <td>Sokhna Diouf</td>
                  <td>NDIAYE</td>
                  <td>Membre de commission</td>
                </tr>
                <tr>
                  <td>48</td>
                  <td>Mame Coumba</td>
                  <td>THIAW</td>
                  <td>Membre de commission</td>
                </tr>
                <tr>
                  <td>49</td>
                  <td>Ibra</td>
                  <td>NDAO</td>
                  <td>Président commission coopération décentralisée et participation citoyenne</td>
                </tr>
                <tr>
                  <td>50</td>
                  <td>Oumy</td>
                  <td>DIOP</td>
                  <td>Membre de commission</td>
                </tr>
                <tr>
                  <td>51</td>
                  <td>Ababacar</td>
                  <td>BEYE</td>
                  <td>Président commission pêche, artisanat et économie maritime</td>
                </tr>
                <tr>
                  <td>52</td>
                  <td>Maty</td>
                  <td>KEBE</td>
                  <td>Membre de commission</td>
                </tr>
                <tr>
                  <td>53</td>
                  <td>Fally</td>
                  <td>NDIAYE</td>
                  <td>Membre de commission</td>
                </tr>
                <tr>
                  <td>54</td>
                  <td>Talla</td>
                  <td>THIAM</td>
                  <td>Président commission femme et promotion de l’économie solidaire</td>
                </tr>
                <tr>
                  <td>55</td>
                  <td>Cheikh</td>
                  <td>NIANG</td>
                  <td>Membre de commission</td>
                </tr>
                <tr>
                  <td>56</td>
                  <td>Mané</td>
                  <td>DIAKHOUMPA</td>
                  <td>Membre de commission</td>
                </tr>
                <tr>
                  <td>57</td>
                  <td>Fatoumata Binetou</td>
                  <td>TOURE</td>
                  <td>Adjointe au maire</td>
                </tr>
                <tr>
                  <td>58</td>
                  <td>Chérif</td>
                  <td>FALL</td>
                  <td>Président commission affaires religieuses</td>
                </tr>
                <tr>
                  <td>59</td>
                  <td>Valimata</td>
                  <td>NIANG</td>
                  <td>Membre de commission</td>
                </tr>
                <tr>
                  <td>60</td>
                  <td>Fatou</td>
                  <td>FAYE</td>
                  <td>Membre de commission</td>
                </tr>
                <tr>
                  <td>61</td>
                  <td>Yayi Bayam</td>
                  <td>DIOUF</td>
                  <td>Adjointe au maire</td>
                </tr>
                <tr>
                  <td>62</td>
                  <td>Badou</td>
                  <td>DIOUF</td>
                  <td>Membre de commission</td>
                </tr>
                <tr>
                  <td>63</td>
                  <td>Serigne Mbaye Mboup</td>
                  <td>MBENGUE</td>
                  <td>Président commission développement économique, gouvernance locale et planification</td>
                </tr>
                <tr>
                  <td>64</td>
                  <td>Thiané</td>
                  <td>TALL</td>
                  <td>Membre de commission</td>
                </tr>
                <tr>
                  <td>65</td>
                  <td>Moustapha</td>
                  <td>FALL</td>
                  <td>Président affaires juridiques et administratives</td>
                </tr>
                <tr>
                  <td>66</td>
                  <td>Thiara</td>
                  <td>DIOP</td>
                  <td>Membre de commission</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section Exécutif Municipal */}
        <section className="executif-section">
          <h2>L'Exécutif Municipal</h2>
          <p>
            L'Exécutif Municipal est composé du Maire et de ses adjoints. Le Maire est le représentant de la collectivité locale et est chargé, sous le contrôle du Conseil Municipal, de diverses missions telles que la gestion des biens communaux, la préparation du budget, la direction des travaux communaux, et bien d'autres.
          </p>

          {/* Bureau Municipal */}
          <div className="bureau-municipal">
            <h3>Le Bureau Municipal</h3>
            <p>
              Le Maire est secondé par ses adjoints qui forment avec lui le Bureau Municipal. Le Bureau Municipal est notamment chargé de l’établissement de l’ordre du jour des séances du Conseil, de l’assistance aux services administratifs et techniques, et de la surveillance de la rentrée des impôts et taxes.
            </p>
            <ul>
              <li><strong>Moustapha SARR</strong> - 1er adjoint en charge de l'administration générale et des finances</li>
              <li><strong>Yayi Bayam DIOUF</strong> - 2ème adjointe en charge du développement économique, de la promotion de la femme et de la petite enfance</li>
              <li><strong>Abdou Aziz GUEYE</strong> - 3ème adjoint en charge de la coopération et des partenariats</li>
              <li><strong>Fatoumata Binetou TOURE</strong> - 4ème adjointe en charge de l’éducation et de la formation</li>
              <li><strong>Alpha Mouhamadou GUEYE</strong> - 5ème adjoint en charge de la Jeunesse, des sports, de la culture et des loisirs</li>
            </ul>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ConseilMunicipal;