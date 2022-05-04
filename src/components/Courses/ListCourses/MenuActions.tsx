import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Link, MenuItem } from '@mui/material';
import Button from '@mui/material/Button';
import Menu, { MenuProps } from '@mui/material/Menu';
import { alpha, styled } from '@mui/material/styles';
import * as React from 'react';
import { FC } from 'react';
import './ListCourses.css';
import { Link as RouterLink } from 'react-router-dom';

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right'
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right'
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light'
        ? 'rgb(55, 65, 81)'
        : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0'
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5)
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        )
      }
    }
  }
}));

interface RightMenuItem {
  to: string;
  className?: string;
  icon?: React.ReactElement;
  label: string;
  onClick?: () => void;
}

interface Props {
  items: RightMenuItem[];
}

export const CustomizedMenus: FC<Props> = ({ items }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="menu-customer">
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        sx={{ background: 'unset', color: 'black' }}
        onClick={handleClick}>
        <MoreHorizIcon />
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button'
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}>
        {items.map((item) => (
          <Link
            component={RouterLink}
            to={item.to}
            underline="hover"
            color="inherit"
            onClick={
              item.onClick
                ? (e) => {
                    e.preventDefault();
                    item.onClick && item.onClick();
                  }
                : undefined
            }
            className={item.className ? item.className : 'option-link'}>
            <MenuItem disableRipple>
              {item.icon}
              {item.label}
            </MenuItem>
          </Link>
        ))}
      </StyledMenu>
    </div>
  );
};
