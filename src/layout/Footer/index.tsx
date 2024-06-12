import './styles.css';
export const Footer = () => {
  return (
    <footer className="footer">
      <img className="footer__image" src="/assets/images/logo.svg" alt="Pokémon Unite" />
      <a href="" className="footer__button button__link">
        Jogue Pokémon Unite agora!
      </a>
      <div className="footer__links">
        <a href="https://play.google.com/store/apps/details?id=jp.pokemon.pokemonunite&pcampaignid=web_share" className="footer__link">Google Play</a>
        <a href="https://www.nintendo.com/pt-br/store/products/pokemon-unite-switch/" className="footer__link">Nintendo Switch</a>
        <a href="https://apps.apple.com/br/app/pok%C3%A9mon-unite/id1512321575" className="footer__link">App Store</a>
      </div>
    </footer>
  );
}
