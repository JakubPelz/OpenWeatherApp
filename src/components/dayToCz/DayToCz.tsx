import moment from "moment";

interface IDay {
    day: number;
}

export const today = (day: number) => {
    switch (moment(day * 1000).format("dddd")) {
        case "Sunday":
            return "Neděle";

        case "Monday":
            return "Pondělí";

        case "Tuesday":
            return "Úterý";

        case "Wednesday":
            return "Středa";
        case "Thursday":
            return "Čtvrtek";

        case "Friday":
            return "Pátek";
        case "Saturday":
            return "Sobota";
    }
};

const DayToCz = ({ day }: IDay) => {
    return <div>{today(day)}</div>;
};

export default DayToCz;
