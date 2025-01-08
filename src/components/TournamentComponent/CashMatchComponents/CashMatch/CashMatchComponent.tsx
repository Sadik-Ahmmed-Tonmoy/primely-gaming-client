import ResponsiveTable from "@/components/ResponsiveTable/ResponsiveTable";
import {
  Card,
  CardBody,
  Tab,
  Tabs
} from "@nextui-org/react";

export const animals = [
  { key: "solo", label: "SOLO" },
  { key: "duo", label: "DUO" },
  { key: "squads", label: "SQUADS" },
];



const CashMatchComponent = () => {
  return (
    <div className="px-2 xs:px-7 lg:px-12 mb-10">
      {/* <div className="flex flex-col-reverse xl:flex-row w-full items-center justify-center"> */}
      <div className="flex flex-col w-full items-center justify-center">
        <Tabs
          aria-label="Options"
          color="primary"
          variant="underlined"
          classNames={{
            tabList:
              "gap-6 w-full relative rounded-none p-0 border-b border-divider",
            cursor: "w-full bg-primary-light",
            tab: "max-w-fit px-0 h-12 ",
            tabContent:
              "group-data-[selected=true]:text-primary  w-12 text-sm md:w-20 md:text-base lg:w-40 lg:text-xl",
          }}
        >
          <Tab key="all" title="all" className="uppercase">
            <Card>
              <CardBody>
                <>
                  <p className="text-gray mb-2">
                    Total Teams: <span className="text-white">12494</span>
                  </p>
                  <ResponsiveTable />
                </>
              </CardBody>
            </Card>
          </Tab>
          <Tab key="solo" title="solo" className="uppercase">
            <Card>
              <CardBody>
              <>
                  <p className="text-gray mb-2">
                    Total Teams: <span className="text-white">12494</span>
                  </p>
                  <ResponsiveTable />
                </>
              </CardBody>
            </Card>
          </Tab>
          <Tab key="duo" title="duo" className="uppercase">
            <Card>
              <CardBody>
              <>
                  <p className="text-gray mb-2">
                    Total Teams: <span className="text-white">12494</span>
                  </p>
                  <ResponsiveTable />
                </>
              </CardBody>
            </Card>
          </Tab>
          <Tab key="squads" title="squads" className="uppercase">
            <Card>
              <CardBody>
              <>
                  <p className="text-gray mb-2">
                    Total Teams: <span className="text-white">12494</span>
                  </p>
                  <ResponsiveTable />
                </>
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
        {/* <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-sm sm:text-base">
          <div className="flex items-center gap-[6px] hover:text-primary-light cursor-pointer">
            <IoSettings size={20} />
            <p>Settings & Rules</p>
          </div>
          <div className="flex items-center gap-[6px] hover:text-primary-light cursor-pointer">
            <MdLeaderboard size={20} />
            <p>Leaderboards</p>
          </div>
        
           <div className="bg-red-500 w-40">
           <Select
              items={animals}
              label="Create Match"
              className="min-w-xs hover:text-primary-light"
              radius="none"
              size="sm"
            >
              {(animal) => (
                <SelectItem key={animal.key} className="whitespace-nowrap">{animal.label}</SelectItem>
              )}
            </Select>
           </div>
          
        </div> */}
      </div>
    </div>
  );
};

export default CashMatchComponent;
