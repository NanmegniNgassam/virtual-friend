import { Message } from "../../models/Message";
import { DateWrapper, MessageContentWrapper, MessageWrapper } from "./message.styles";

interface MessageContainerProps {
    message: Message
}

/**
 * Format a date into 'HH:MM' disposition
 * 
 * @param date the date to convert
 * @returns the date corresponding form in 'HH:MM' string
 */
const formatDate = (date: Date):string => {
    const localTime = new Date(date).toLocaleTimeString('en-GB');

    // Remove the seconds value before returning
    const newLocalTime = localTime.split(':').slice(0, 2).join(':');

    return newLocalTime;
}

/**
 * Format markDown text into HTML
 * 
 * @param text markDown text to format
 * @returns the html derived from the markdown
 */
const formatMarkdownToHTML = (text: string): string => {
    // Titles management (eg: "1. **Title**" → "<h4>Title</4>")
    text = text.replace(/\n(\d+)\.\s\*\*(.+?)\*\*/g, "\n<h4>$2</h4>");

    // Unordonnated lists management (eg: "- Item" → "<ul><li>Item</li></ul>")
    text = text.replace(/\n\s*-\s*(.+)/g, "\n<li>$1</li>");
    text = text.replace(/(<li>.*<\/li>)(?!<li>)/g, "<ul>$1</ul>");

    // Ordonnated lists management (eg: "1. Item" → "<ol><li>Item</li></ol>")
    text = text.replace(/\n(\d+)\.\s(.+)/g, "\n<li>$2</li>");
    text = text.replace(/(<li>.*<\/li>)(?!<li>)/g, "<ol>$1</ol>");

    // Markdown arrays management
    if (text.includes("|")) {
        text = text.replace(/\n\|(.+?)\|\n/g, (match: string, rowContent: string): string => {
            const rows: string[] = rowContent.split("\n|").map((row: string) => 
                `<tr><td>${row.trim().split("|").map((cell: string) => cell.trim()).join("</td><td>")}</td></tr>`
            );
            return `</p><table border="1">${rows.join("")}</table><p>`;
        });
    }

    // Bold text management (ex: "**text**" → "<strong>text</strong>")
    text = text.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");

    // Italic text management (ex: "*text*" → "<em>text</em>")
    text = text.replace(/\*(.+?)\*/g, "<em>$1</em>");

    // Paragraphs management (ex: "\n\n" → "<p>")
    text = "<p>" + text.replace(/\n\n/g, "</p><p>") + "</p>";

    // Empty paragraphs deletion
    return text.replace(/<p><\/p>/g, "");
}

const MessageContainer = ( { message } : MessageContainerProps ) => {
    return (
        <MessageWrapper type={message.type}>
            <MessageContentWrapper dangerouslySetInnerHTML={{ __html: formatMarkdownToHTML(message.content) }} >
            </MessageContentWrapper>
            <DateWrapper type={message.type}>
                { formatDate(message.sentAt) }
            </DateWrapper>
        </MessageWrapper>
    );
}
 
export default MessageContainer;