import "./emptyTableMessage.css";

interface EmptyTableMessageProps {
  empty: boolean;
  message: string;
}
export default function EmptyTableMessage(props: EmptyTableMessageProps) {
  if (!props.empty) return null;
  return (
    <div className="empty-table">
      <div className="empty-table-text">{props.message}</div>
    </div>
  );
}
