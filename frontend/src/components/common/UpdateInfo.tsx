interface IUpdateInfoProps {
  updateDate: Date;
  updateTime: string;
}

const UpdateInfo = ({ updateDate, updateTime }: IUpdateInfoProps) => {
  return (
    <span>
      Update {updateDate.toLocaleDateString()} at {updateTime}
    </span>
  );
};

export default UpdateInfo;
