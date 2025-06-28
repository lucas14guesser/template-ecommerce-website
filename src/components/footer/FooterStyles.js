import styled from "styled-components";

export const FooterC = styled.footer`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding: 2rem 4rem;
    background-color: var(--color-bg-section);
    box-shadow: -3px -3px 3px var(--color-somb);
`
export const FooterTopic = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
`
export const FooterList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    list-style-type: none;
`