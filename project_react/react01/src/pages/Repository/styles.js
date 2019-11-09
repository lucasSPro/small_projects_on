import styled from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Owner = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 120px;
        border-radius: 50%;
        margin-top: 20px;
    }

    a {
        color:#265496;
        font-size: 16px;
        text-decoration: none;
    }

    h1 {
        font-size: 24px;
        margin-top: 10px;
    }

    p {
        margin-top: 5px;
        font-size: 14px;
        color: #666;
        line-height: 1.4;
        text-align: center;
        max-width: 400px;

    }
`;

export const IssueList = styled.ul`
    padding-top: 30px;
    margin-top:30px;
    border-top: 1px solid #265496;
    list-style: none;

    li {
        display: flex;
        padding: 15px 10px;
        border: 1px solid #eee;
        border-radius: 4px;
    }

    & + li {
        margin-top: 10px;
    }

    img {
        width: 42px;
        height:42px;
        border-radius: 50%;
        border: 2px solid #eee;
    }

    div {
        flex: 1;
        margin-left: 15px;

        strong {
            font-size: 16px;

            span {
                color: #fff;
                background:#265496;
                padding: 1px 5px;
                border-radius: 4px;
                margin-left: 10px;
                font-size: 12px;
            }

        }
        a {
            text-decoration: none;
            color: #333;

            &:hover {
                color: #265496;
            }
        }
        p {
            margin-top: 7px;
            font-size: 14px;
            color: #999;
        }
    }
`;
