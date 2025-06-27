import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    padding: 2rem 4rem;
    background-color: var(--color-bg-section);
    gap: 2rem;
    box-shadow: 3px 3px 3px var(--color-somb);
`
export const NavbarContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
export const ListNav = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 2rem;
    list-style-type: none;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;
`
export const LinkSocialMedia = styled(Link)`
    text-decoration: none;
    color: var(--color-txt);
    font-size: var(--font-icon-sz);
    transition: var(--trans-time);

    &:hover {
        color: var(--color-hover);
    }
`
export const LinkHomeTxt = styled(Link)`
    font-style: italic;
    font-size: 3rem;
    text-decoration: none;
    color: var(--color-txt);
    transition: var(--trans-time);

    &:hover {
        color: var(--color-hover);
    }
`
export const SearchIpt = styled.input`
    width: 20rem;
    padding: 1rem;
    color: var(--color-txt);
    outline: none;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    border: 1px solid var(--color-txt);
    border-right: none;
    font-size: var(--font-txt-sz);
`
export const BtnSearch = styled.button`
    width: 3rem;
    padding: 1.05rem;
    color: var(--color-bg);
    background-color: var(--color-txt);
    border: 1px solid var(--color-txt);
    border-left: none;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    cursor: pointer;
    transition: var(--trans-time);

    &:hover {
        background-color: var(--color-hover);
    }
`
export const LinksCategoriasNav = styled(Link)`
    text-decoration: none;
    color: var(--color-txt);
    font-size: var(--font-destq-sz);
    transition: var(--trans-time);

    &:hover {
        color: var(--color-hover);
    }
`
export const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`