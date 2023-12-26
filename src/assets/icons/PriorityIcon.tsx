import { TEXT_COLOR } from 'src/theme/colors';

export default function PriorityIcon(): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <mask
        id="mask0_416_16183"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <rect width="24" height="24" fill={TEXT_COLOR.disabled} />
      </mask>
      <g mask="url(#mask0_416_16183)">
        <path
          d="M9 21C7.33333 21 5.91667 20.4167 4.75 19.25C3.58333 18.0833 3 16.6667 3 15V9C3 7.33333 3.58333 5.91667 4.75 4.75C5.91667 3.58333 7.33333 3 9 3H15C16.6667 3 18.0833 3.58333 19.25 4.75C20.4167 5.91667 21 7.33333 21 9V15C21 16.6667 20.4167 18.0833 19.25 19.25C18.0833 20.4167 16.6667 21 15 21H9ZM11 16L17 10L15.6 8.6L11 13.2L8.8 11L7.4 12.4L11 16ZM9 19H15C16.1 19 17.0417 18.6083 17.825 17.825C18.6083 17.0417 19 16.1 19 15V9C19 7.9 18.6083 6.95833 17.825 6.175C17.0417 5.39167 16.1 5 15 5H9C7.9 5 6.95833 5.39167 6.175 6.175C5.39167 6.95833 5 7.9 5 9V15C5 16.1 5.39167 17.0417 6.175 17.825C6.95833 18.6083 7.9 19 9 19Z"
          fill={TEXT_COLOR.disabled}
        />
      </g>
    </svg>
  );
}
