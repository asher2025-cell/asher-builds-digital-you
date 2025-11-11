const Footer = () => {
  return (
    <footer className="py-8 bg-card border-t">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-2">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Asher Gangaidzo. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground italic">
            "Innovate with purpose, build with precision."
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
