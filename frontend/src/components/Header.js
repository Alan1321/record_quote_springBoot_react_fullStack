import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
import GitHubIcon from '@mui/icons-material/GitHub';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';

import "../styles/header.css"

const Header = () =>{

    return (
        <AppBar component="nav">
            <div className='headers'>
                <div className="logo_title">
                    <RequestQuoteIcon style={{marginRight:'20px', marginLeft:'10px', color:'white'}}/>
                    <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
                        Record Your Quote
                    </Typography>
                </div>
                <a
                href="https://github.com/Alan1321/record_quote_springBoot_react_fullStack"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: 'inherit' }}>
                    <GitHubIcon style={{ marginRight: '20px' }} />
                </a>
            </div>
        </AppBar>
    )
}

export default Header