import { Scheduler } from "@aldabil/react-scheduler";
import {
  EventActions,
  ProcessedEvent,
  // ViewEvent,
} from "@aldabil/react-scheduler/types";
import { EVENTS } from "./events";

export default function CalendarScheduler() {
  const fetchRemote = async (query: any): Promise<ProcessedEvent[]> => {
    console.log({ query });
    /**Simulate fetchin remote data */
    return new Promise((res) => {
      setTimeout(() => {
        res(EVENTS);
      }, 3000);
    });
  };

  const handleConfirm = async (
    event: ProcessedEvent,
    action: EventActions
  ): Promise<ProcessedEvent> => {
    console.log("handleConfirm =", action, event.title);

    /**
     * Make sure to return 4 mandatory fields:
     * event_id: string|number
     * title: string
     * start: Date|string
     * end: Date|string
     * ....extra other fields depend on your custom fields/editor properties
     */
    // Simulate http request: return added/edited event
    return new Promise((res, rej) => {
      if (action === "edit") {
        /** PUT event to remote DB */
      } else if (action === "create") {
        /**POST event to remote DB */
      }

      const isFail = Math.random() > 0.6;
      // Make it slow just for testing
      setTimeout(() => {
        if (isFail) {
          rej("Ops... Faild");
        } else {
          res({
            ...event,
            event_id: event.event_id || Math.random(),
          });
        }
      }, 3000);
    });
  };

  const handleDelete = async (deletedId: string): Promise<string> => {
    // Simulate http request: return the deleted id
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(deletedId);
      }, 3000);
    });
  };

  return (
    <Scheduler
      view="month"
      // this is the data to be put in the calendar. fetch it from db. its already in json form
      events={[
        {
          event_id: 1,
          title: "Event 1",
          start: new Date("2023/11/2 09:30"),
          end: new Date("2023/11/3 10:30"),
          editable: false,
          deletable: false,
          draggable: false,
        },
        {
          event_id: 2,
          title: "Event 2",
          start: new Date("2023/11/11 10:00"),
          end: new Date("2023/11/12 11:00"),
          editable: false,
          deletable: false,
          draggable: false,
        },
      ]}
      editable={false}
      deletable={false}
      draggable={false}
    />
  );
}
