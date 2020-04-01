import {booleanConverter, Property} from "tns-core-modules/ui/core/view";
import {Color} from "tns-core-modules/color/color";
import {ContentView} from "tns-core-modules/ui/content-view";

export enum MapStyle {
    DARK = <any>"dark",
    OUTDOORS = <any>"outdoors",
    LIGHT = <any>"light",
    SATELLITE = <any>"satellite",
    SATELLITE_STREETS = <any>"satellite_streets",
    STREETS = <any>"streets",
    TRAFFIC_DAY = <any>"traffic_day",
    TRAFFIC_NIGHT = <any>"traffic_night"
}

export interface Point {
    x: number;
    y: number;
}

export interface CoordinateRegion {
    minLat: number;
    maxLat: number;
    minLng: number;
    maxLng: number;
}

export interface LatLng {
    lat: number;
    lng: number;
}

export interface QueryRenderedFeaturesOptions {
    point: LatLng;
    layerIds?: string[];
}

export interface Feature {
    id: any;
    type?: string;
    properties: Object;
}

export interface AddPolygonOptions {
    /**
     * Set this in case you want to later pass it to 'removePolygons'. TODO doesn't exist yet ;)
     */
    id?: any;
    points: LatLng[];
    fillColor?: string | Color;
    /**
     * Transparency / alpha, ranging from 0 to 1.
     * Default fully opaque (1).
     */
    fillOpacity?: number;

    /**
     * The line around the polygon. Barely visible on Android.
     */
    strokeColor?: string | Color;
    /**
     * iOS only.
     */
    strokeWidth?: number;
    /**
     * iOS only.
     */
    strokeOpacity?: number;
}

export interface UserLocation {
    location: LatLng;
    speed: number;
}

export interface SetCenterOptions extends LatLng {
    animated?: boolean;
}

export interface AddPolylineOptions {
    /**
     * Set this in case you want to later pass it to 'removePolylines'.
     */
    id?: any;
    /**
     * Width of the line, default 5.
     */
    width?: number;
    /**
     * Color of the line, default black.
     */
    color?: string | Color;
    /**
     * Transparency / alpha, ranging from 0 to 1.
     * Default fully opaque (1).
     */
    opacity?: number;
    points: LatLng[];

    /**
     * Draw white arrows on the route.
     * Default is true.
     */
    drawArrows?: boolean;
}

export interface MapboxMarker extends LatLng {
    /**
     * Set this in case you want to later pass it to 'removeMarker'.
     */
    id?: any;
    title?: string;
    subtitle?: string;
    /**
     * Prefix with 'res://' and load a file from the resources folder.
     * Details on how 'res://' is used can be found here: https://docs.nativescript.org/ui/images#load-images-from-resource
     * Example: "res://iconfile"
     */
    icon?: string;
    /**
     * The preferred way is using the 'icon' property, but you can still reference a local file directly.
     * Example: "res/markers/green_pin_marker.png"
     */
    iconPath?: string;
    /**
     * A callback function to invoke when the marker is tapped.
     */
    onTap?: Function;
    /**
     * A callback function to invoke when the callout (popup) of this marker is tapped.
     */
    onCalloutTap?: Function;
    /**
     * Set to true to select the marker when rendered - effectively showing any configured callout.
     * Note that only 1 callout will be shown at any time on a Mapbox map.
     * Default false.
     */
    selected?: boolean;
    update?: (newSettings: MapboxMarker) => void;
    ios?: any;
    android?: any;
}

export interface SetZoomLevelOptions {
    level: number;
    animated: boolean;
}

export interface SetTiltOptions {
    /**
     * default 30 (degrees)
     */
    tilt: number;
    /**
     * default 5000 (milliseconds)
     */
    duration: number;
}

export interface ShowOptionsMargins {
    left?: number;
    right?: number;
    top?: number;
    bottom?: number;
}

export interface Bounds {
    north: number;
    east: number;
    south: number;
    west: number;
}

export interface Viewport {
    bounds: Bounds;
    zoomLevel: number;
}

export interface SetViewportOptions {
    bounds: Bounds;
    /**
     * Add an animation of about 1 second.
     * Default true.
     */
    animated?: boolean;
}

export interface DeleteOfflineRegionOptions {
    /**
     * The name of the offline region to delete.
     */
    name: string;
}

export interface MapboxCluster {
    points: number;
    color: string;
}

export interface AddGeoJsonClusteredOptions {
    /**
     * A unique identifier, like: "earthquakes"
     */
    name: string;
    /**
     * URL, like: "https://www.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson"
     */
    data: string;
    clusterMaxZoom?: number;
    clusterRadius?: number;
    clusters?: Array<MapboxCluster>;
}

export type UserLocationCameraMode =
    "NONE" |
    "NONE_COMPASS" |
    "NONE_GPS" |
    "TRACKING" |
    "TRACK_COMPASS" |
    "TRACKING_GPS" |
    "TRACK_GPS_NORTH";

export interface TrackUserOptions {
    mode: UserLocationCameraMode;
    /**
     * iOS only, as Android is always animated. Default true (because of Android).
     */
    animated?: boolean;
}

export interface AddExtrusionOptions {

}

export interface OfflineRegion {
    name: string;
    bounds: Bounds;
    minZoom: number;
    maxZoom: number;
    style: MapStyle;
}

export interface DownloadProgress {
    name: string;
    completed: number;
    expected: number;
    percentage: number;
    complete: boolean;
    /**
     * Android only, the size in bytes of the download so far.
     */
    completedSize?: number;
}

export interface DownloadOfflineRegionOptions extends OfflineRegion {
    onProgress?: (data: DownloadProgress) => void;
    /**
     * Optional, used on Android only.
     * Set this, in case no map has been show yet (and thus, no accessToken has been passed in yet).
     */
    accessToken?: string;
}

export interface ListOfflineRegionsOptions {
    /**
     * Optional, used on Android only.
     * Set this, in case no map has been show yet (and thus, no accessToken has been passed in yet).
     */
    accessToken?: string;
}

/**
 * The options object passed into the show function.
 */
export interface ShowOptions {
    accessToken: string;
    /**
     * default 'streets'
     */
    style?: MapStyle;
    margins?: ShowOptionsMargins;
    center?: LatLng;
    /**
     * default 0 (which is almost the entire planet)
     */
    zoomLevel?: number;
    /**
     * default false (true requires adding `NSLocationWhenInUseUsageDescription` or `NSLocationAlwaysUsageDescription` to the .plist)
     */
    showUserLocation?: boolean;
    /**
     * default false (required for the 'starter' plan)
     */
    hideLogo?: boolean;
    /**
     * default true
     */
    hideAttribution?: boolean;
    /**
     * default false
     */
    hideCompass?: boolean;
    /**
     * default false
     */
    disableRotation?: boolean;
    /**
     * default false
     */
    disableScroll?: boolean;
    /**
     * default false
     */
    disableZoom?: boolean;
    /**
     * default false
     */
    disableTilt?: boolean;
    /**
     * Immediately add markers to the map
     */
    markers?: MapboxMarker[];

    /**
     * callback on location permission granted
     *
     * Android Only
     */

    onLocationPermissionGranted?: any;

    /**
     * callback on location permission denied
     *
     * Android Only
     */

    onLocationPermissionDenied?: any;

    /**
     * callback on Map Ready
     *
     * Android only
     */

    onMapReady?: any;

    /**
     * callback on scroll event
     */

    onScrollEvent?: any;

    /**
     * callback on move begin event
     */

    onMoveBeginEvent?: any;

    /**
     * Android context
     */

    context?: any;

    /**
     * Android parent View
     */

    parentView?: any;

}

export interface ShowResult {
    ios: any
    /* MGLMapView */
    ;
    android: any
    /* com.mapbox.mapboxsdk.maps.MapView */
    ;
}

export interface AnimateCameraOptions {
    target: LatLng;
    /**
     * For Android, 0.0 - 20.0
     */
    zoomLevel?: number;
    /**
     * For iOS, in meters from the ground
     */
    altitude?: number;
    bearing?: number;
    tilt?: number;
    duration?: number;
}

export interface MapboxCommonApi {
    requestFineLocationPermission(): Promise<any>;

    hasFineLocationPermission(): Promise<boolean>;
}

export interface MapboxApi {

    initEventHandlerShim(settings: any, mapboxNativeViewInstance: any): void;

    onMapEvent(eventName, id, callback, nativeMapView?): void;

    offMapEvent(eventName, id, nativeMapView?): void;

    show(options: ShowOptions): Promise<ShowResult>;

    hide(): Promise<any>;

    unhide(): Promise<any>;

    destroy(nativeMap?: any): Promise<any>;

    // life cycle hooks, required on Android to avoid crashes.

    onStart(nativeMap?: any): Promise<any>;

    onResume(nativeMap?: any): Promise<any>;

    onPause(nativeMap?: any): Promise<any>;

    onStop(nativeMap?: any): Promise<any>;

    onLowMemory(nativeMap?: any): Promise<any>;

    onDestroy(nativeMap?: any): Promise<any>;

    // onSaveInstanceState( Bundle outState)

    setMapStyle(style: string | MapStyle, nativeMap?: any): Promise<any>;

    addMarkers(markers: MapboxMarker[], nativeMap?: any): Promise<any>;

    removeMarkers(options?: any, nativeMap?: any): Promise<any>;

    setCenter(options: SetCenterOptions, nativeMap?: any): Promise<any>;

    getCenter(nativeMap?: any): Promise<LatLng>;

    setZoomLevel(options: SetZoomLevelOptions, nativeMap?: any): Promise<any>;

    getZoomLevel(nativeMap?: any): Promise<number>;

    setTilt(options: SetTiltOptions, nativeMap?: any): Promise<any>;

    getTilt(nativeMap?: any): Promise<number>;

    getUserLocation(nativeMap?: any): Promise<UserLocation>;

    showUserLocationMarker(options: any, nativeMap?: any): void;

    changeUserLocationMarkerMode(renderModeString, cameraModeString: UserLocationCameraMode, nativeMap?: any): void;

    forceUserLocationUpdate(location: any, nativeMap?: any): void;

    trackUser(options: TrackUserOptions, nativeMap?: any): Promise<void>;

    getTrackingMode(nativeMap?: any): UserLocationCameraMode;

    addLayer(style, nativeMapView?: any): Promise<any>;

    removeLayer(id: string, nativeMapView?: any): Promise<any>;

    addLinePoint(id: string, point, nativeMapView?: any): Promise<any>;

    queryRenderedFeatures(options: QueryRenderedFeaturesOptions, nativeMap?: any): Promise<Array<Feature>>;

    addPolygon(options: AddPolygonOptions, nativeMap?: any): Promise<any>;

    removePolygons(ids?: Array<any>, nativeMap?: any): Promise<any>;

    addPolyline(options: AddPolylineOptions, nativeMap?: any): string;

    removePolylines(ids?: Array<any>, nativeMap?: any);

    updatePolyline(id: string, newPoints: Array<LatLng>, nativeMap?: any);

    animateCamera(options: AnimateCameraOptions, nativeMap?: any): Promise<any>;

    setOnMapClickListener(listener: (data: LatLng) => void, nativeMap?): Promise<any>;

    setOnMapLongClickListener(listener: (data: LatLng) => void, nativeMap?): Promise<any>;

    setOnScrollListener(listener: (data?: LatLng) => void, nativeMap?: any): Promise<void>;

    setOnMoveBeginListener(listener: (data?: LatLng) => void, nativeMap?: any): Promise<void>;

    setOnFlingListener(listener: () => void, nativeMap?: any): Promise<any>;

    setOnCameraMoveListener(listener: () => void, nativeMap?: any): Promise<any>;

    setOnCameraMoveCancelListener(listener: () => void, nativeMap?: any): Promise<any>;

    setOnCameraIdleListener(listener: () => void, nativeMap?: any): Promise<any>;

    requestFineLocationPermission(): Promise<any>;

    hasFineLocationPermission(): Promise<boolean>;

    getViewport(nativeMap?: any): Promise<Viewport>;

    setViewport(options: SetViewportOptions, nativeMap?: any): Promise<any>;

    downloadOfflineRegion(options: DownloadOfflineRegionOptions): Promise<any>;

    listOfflineRegions(options?: ListOfflineRegionsOptions): Promise<Array<OfflineRegion>>;

    deleteOfflineRegion(options: DeleteOfflineRegionOptions): Promise<any>;

    addGeoJsonClustered(options: AddGeoJsonClusteredOptions): Promise<any>;

    // addExtrusion(options: AddExtrusionOptions): Promise<any>;

    // new methods

    isScrollingEnabled(nativeMap?: any): Promise<boolean>;

    convertToMapCoordinate(point: Point, nativeMap?: any): Promise<LatLng>;

    convertToOnScreenCoordinate(coordinate: LatLng, nativeMap?: any): Promise<Point>;

    getDistanceBetween(from: LatLng, to: LatLng, nativeMap?: any): Promise<number>;

}

export abstract class MapboxCommon implements MapboxCommonApi {
    public static defaults = {
        style: MapStyle.STREETS.toString(),
        mapStyle: MapStyle.STREETS.toString(),
        margins: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        },
        zoomLevel: 0, // 0 (a big part of the world) to 20 (streetlevel)
        showUserLocation: false, // true requires adding `NSLocationWhenInUseUsageDescription` or `NSLocationAlwaysUsageDescription` in the .plist
        hideLogo: false, // required for the 'starter' plan
        hideAttribution: true,
        hideCompass: false,
        disableRotation: false,
        disableScroll: false,
        disableZoom: false,
        disableTilt: false,
        delay: 0
    };

    public static merge(obj1: {}, obj2: {}): any { // Our merge function
        let result = {}; // return result
        for (let i in obj1) {      // for every property in obj1
            if ((i in obj2) && (typeof obj1[i] === "object") && (i !== null)) {
                result[i] = this.merge(obj1[i], obj2[i]); // if it's an object, merge
            } else {
                result[i] = obj1[i]; // add it to result
            }
        }
        for (let i in obj2) { // add the remaining properties from object 2
            if (i in result) { // conflict
                continue;
            }
            result[i] = obj2[i];
        }
        return result;
    }

    requestFineLocationPermission(): Promise<any> {
        return new Promise(resolve => {
            resolve();
        });
    }

    hasFineLocationPermission(): Promise<boolean> {
        return new Promise(resolve => {
            resolve(true);
        });
    }
}

/*************** XML definition START ****************/
export interface MapboxViewApi {

    // these functions can be called after the mapReady event fired

    addMarkers(markers: MapboxMarker[]): Promise<any>;

    onMapEvent(eventName, id, callback): void;

    offMapEvent(eventName, id): void;

    removeMarkers(options?: any): Promise<any>;

    queryRenderedFeatures(options: QueryRenderedFeaturesOptions): Promise<Array<Feature>>;

    setOnMapClickListener(listener: (data: LatLng) => void): Promise<any>;

    setOnMapLongClickListener(listener: (data: LatLng) => void): Promise<any>;

    setOnScrollListener(listener: (data?: LatLng) => void): Promise<void>;

    setOnMoveBeginListener(listener: (data?: LatLng) => void): Promise<void>;

    setOnFlingListener(listener: () => void): Promise<any>;

    setOnCameraMoveListener(listener: () => void): Promise<any>;

    setOnCameraMoveCancelListener(listener: () => void): Promise<any>;

    setOnCameraIdleListener(listener: () => void): Promise<any>;

    getViewport(): Promise<Viewport>;

    setViewport(options: SetViewportOptions): Promise<any>;

    setMapStyle(style: string | MapStyle): Promise<any>;

    getCenter(): Promise<LatLng>;

    setCenter(options: SetCenterOptions): Promise<any>;

    getZoomLevel(): Promise<number>;

    setZoomLevel(options: SetZoomLevelOptions): Promise<any>;

    getTilt(): Promise<number>;

    setTilt(options: SetTiltOptions): Promise<any>;

    getUserLocation(): Promise<UserLocation>;

    trackUser(options: TrackUserOptions): Promise<any>;

    getTrackingMode(): UserLocationCameraMode;

    showUserLocationMarker(options): void;

    changeUserLocationMarkerMode(renderModeString, cameraModeString: UserLocationCameraMode): void;

    forceUserLocationUpdate(location): void;

    addLayer(style): Promise<any>;

    removeLayer(id: string): Promise<any>;

    addLinePoint(id: string, point): Promise<any>;

    queryRenderedFeatures(options: QueryRenderedFeaturesOptions): Promise<Array<Feature>>;

    addPolygon(options: AddPolygonOptions): Promise<any>;

    removePolygons(ids?: Array<any>): Promise<any>;

    addPolyline(options: AddPolylineOptions): string;

    removePolylines(ids?: Array<any>);

    updatePolyline(id: string, newPoints: Array<LatLng>);

    animateCamera(options: AnimateCameraOptions): Promise<any>;

    destroy(): Promise<any>;

    onStart(): Promise<any>;

    onResume(): Promise<any>;

    onPause(): Promise<any>;

    onStop(): Promise<any>;

    onLowMemory(): Promise<any>;

    onDestroy(): Promise<any>;

    // onSaveInstanceState( Bundle outState)

    // new methods

    isScrollingEnabled(): Promise<boolean>;

    convertToMapCoordinate(point: Point): Promise<LatLng>;

    convertToOnScreenCoordinate(coordinate: LatLng): Promise<Point>;

    getDistanceBetween(from: LatLng, to: LatLng): Promise<number>;

    getPixelDistanceBetween(from: LatLng, to: LatLng): Promise<number>;

    getCoordinateRegionAroundPoint(around: Point, pixelDistance: number): Promise<CoordinateRegion>;

}

// ----------------------------------------------------------------------------------------

/**
 * common base for views created in XML.
 *
 * Instead of returning a reference to the Mapbox API instance (class Mapbox) from the view
 * the author decided to implement shim methods for a subset of the API. I'm not sure what the
 * reasoning was.
 *
 * @see Mapbox
 */

export abstract class MapboxViewCommonBase extends ContentView implements MapboxViewApi {

    // a reference to a class implementing the Mapbox API shim interface. (see class Mapbox
    // in the android and ios files.)

    static disableScrollProperty = new Property<MapboxViewCommonBase, boolean>({
        name: "disableScroll",
        defaultValue: MapboxCommon.defaults.disableScroll,
        valueConverter: booleanConverter,
        valueChanged: (target, oldValue, newValue) => {
            target.onDisableScrollPropertyChanged(oldValue, newValue);
        },
    });

    protected mapbox: MapboxApi;

    abstract getNativeMapView(): any;

    /**
     * map event
     *
     * The base NativeScript ContentView class has on() and off() methods.
     */

    public onMapEvent(eventName, id, callback): void {

        console.log("MapboxViewCommonBase:on(): top");

        return this.mapbox.onMapEvent(eventName, id, callback, this.getNativeMapView());
    }

    public offMapEvent(eventName, id): void {
        return this.mapbox.offMapEvent(eventName, id, this.getNativeMapView());
    }

    addMarkers(markers: MapboxMarker[]): Promise<any> {
        return this.mapbox.addMarkers(markers, this.getNativeMapView());
    }

    removeMarkers(options?: any): Promise<any> {
        return this.mapbox.removeMarkers(options, this.getNativeMapView());
    }

    setOnMapClickListener(listener: (data: LatLng) => void): Promise<any> {
        return this.mapbox.setOnMapClickListener(listener, this.getNativeMapView());
    }

    setOnMapLongClickListener(listener: (data: LatLng) => void): Promise<any> {
        return this.mapbox.setOnMapLongClickListener(listener, this.getNativeMapView());
    }

    setOnScrollListener(listener: (data?: LatLng) => void, nativeMap?: any): Promise<void> {
        return this.mapbox.setOnScrollListener(listener, this.getNativeMapView());
    }

    setOnMoveBeginListener(listener: (data?: LatLng) => void, nativeMap?: any): Promise<void> {
        return this.mapbox.setOnMoveBeginListener(listener, this.getNativeMapView());
    }

    setOnFlingListener(listener: () => void, nativeMap?: any): Promise<any> {
        return this.mapbox.setOnFlingListener(listener, this.getNativeMapView());
    }

    setOnCameraMoveListener(listener: () => void, nativeMap?: any): Promise<any> {
        return this.mapbox.setOnCameraMoveListener(listener, this.getNativeMapView());
    }

    setOnCameraMoveCancelListener(listener: () => void, nativeMap?: any): Promise<any> {
        return this.mapbox.setOnCameraMoveCancelListener(listener, this.getNativeMapView());
    }

    setOnCameraIdleListener(listener: () => void, nativeMap?: any): Promise<any> {
        return this.mapbox.setOnCameraIdleListener(listener, this.getNativeMapView());
    }

    getViewport(): Promise<Viewport> {
        return this.mapbox.getViewport(this.getNativeMapView());
    }

    setViewport(options: SetViewportOptions): Promise<any> {
        return this.mapbox.setViewport(options, this.getNativeMapView());
    }

    setMapStyle(style: string | MapStyle): Promise<any> {
        return this.mapbox.setMapStyle(style, this.getNativeMapView());
    }

    getCenter(): Promise<LatLng> {
        return this.mapbox.getCenter(this.getNativeMapView());
    }

    setCenter(options: SetCenterOptions): Promise<any> {
        return this.mapbox.setCenter(options, this.getNativeMapView());
    }

    getZoomLevel(): Promise<number> {
        return this.mapbox.getZoomLevel(this.getNativeMapView());
    }

    setZoomLevel(options: SetZoomLevelOptions): Promise<any> {
        return this.mapbox.setZoomLevel(options, this.getNativeMapView());
    }

    getTilt(): Promise<number> {
        return this.mapbox.getTilt(this.getNativeMapView());
    }

    setTilt(options: SetTiltOptions): Promise<any> {
        return this.mapbox.setTilt(options, this.getNativeMapView());
    }

    getUserLocation(): Promise<UserLocation> {
        return this.mapbox.getUserLocation(this.getNativeMapView());
    }

    showUserLocationMarker(options): void {
        this.mapbox.showUserLocationMarker(options, this.getNativeMapView());
    }

    changeUserLocationMarkerMode(renderModeString, cameraModeString: UserLocationCameraMode): void {
        this.mapbox.changeUserLocationMarkerMode(renderModeString, cameraModeString, this.getNativeMapView());
    }

    forceUserLocationUpdate(location): void {
        this.mapbox.forceUserLocationUpdate(location, this.getNativeMapView());
    }

    trackUser(options: TrackUserOptions): Promise<any> {
        return this.mapbox.trackUser(options, this.getNativeMapView());
    }

    getTrackingMode(): UserLocationCameraMode {
        return this.mapbox.getTrackingMode(this.getNativeMapView());
    }

    addLayer(style): Promise<any> {
        return this.mapbox.addLayer(style, this.getNativeMapView());
    }

    removeLayer(id: string): Promise<any> {
        return this.mapbox.removeLayer(id, this.getNativeMapView());
    }

    addLinePoint(id: string, point): Promise<any> {
        return this.mapbox.addLinePoint(id, point, this.getNativeMapView());
    }

    queryRenderedFeatures(options: QueryRenderedFeaturesOptions): Promise<Array<Feature>> {
        return this.mapbox.queryRenderedFeatures(options, this.getNativeMapView());
    }

    addPolygon(options: AddPolygonOptions): Promise<any> {
        return this.mapbox.addPolygon(options, this.getNativeMapView());
    }

    removePolygons(ids?: Array<any>): Promise<any> {
        return this.mapbox.removePolygons(ids, this.getNativeMapView());
    }

    addPolyline(options: AddPolylineOptions): string {
        return this.mapbox.addPolyline(options, this.getNativeMapView());
    }

    removePolylines(ids?: Array<any>) {
        this.mapbox.removePolylines(ids, this.getNativeMapView());
    }

    updatePolyline(id: string, newPoints: Array<LatLng>) {
        this.mapbox.updatePolyline(id, newPoints, this.getNativeMapView());
    }

    animateCamera(options: AnimateCameraOptions): Promise<any> {
        return this.mapbox.animateCamera(options, this.getNativeMapView());
    }

    destroy(): Promise<any> {
        return this.mapbox.destroy(this.getNativeMapView());
    }

    onStart(): Promise<any> {
        return this.mapbox.onStart(this.getNativeMapView());
    }

    onResume(nativeMap?: any): Promise<any> {

        console.log("MapboxViewCommonBase:onResume(): with nativeView:", this.getNativeMapView());

        return this.mapbox.onResume(this.getNativeMapView());
    }

    onPause(nativeMap?: any): Promise<any> {

        console.log("MapboxViewCommonBase:onPause(): with nativeView:", this.getNativeMapView());

        return this.mapbox.onPause(this.getNativeMapView());
    }

    onStop(nativeMap?: any): Promise<any> {
        return this.mapbox.onStop(this.getNativeMapView());
    }

    onLowMemory(nativeMap?: any): Promise<any> {
        return this.mapbox.onLowMemory(this.getNativeMapView());
    }

    // onSaveInstanceState( Bundle outState)

    // new methods

    onDestroy(nativeMap?: any): Promise<any> {
        return this.mapbox.onDestroy(this.getNativeMapView());
    }

    convertToMapCoordinate(point: Point): Promise<LatLng> {
        return this.mapbox.convertToMapCoordinate(point, this.getNativeMapView());
    }

    isScrollingEnabled(): Promise<boolean> {
        return this.mapbox.isScrollingEnabled(this.getNativeMapView());
    }

    convertToOnScreenCoordinate(coordinate: LatLng): Promise<Point> {
        return this.mapbox.convertToOnScreenCoordinate(coordinate, this.getNativeMapView());
    }

    getDistanceBetween(from: LatLng, to: LatLng): Promise<number> {
        return this.mapbox.getDistanceBetween(from, to, this.getNativeMapView());
    }

    getPixelDistanceBetween(from: LatLng, to: LatLng): Promise<number> {
        return new Promise((resolve, reject) => {
            try {
                this.convertToOnScreenCoordinate(from)
                    .then((a) => {
                        this.convertToOnScreenCoordinate(to)
                            .then((b) => {
                                let dx = a.x - b.x;
                                let dy = a.y - b.y;
                                resolve(Math.sqrt(dx * dx + dy * dy));
                            });
                    });
            } catch (ex) {
                console.log("Error in mapbox.getPixelDistanceBetween: " + ex);
                reject(ex);
            }
        });
    }

    getCoordinateRegionAroundPoint(around: Point, pixelDistance: number): Promise<CoordinateRegion> {
        return new Promise((resolve, reject) => {

            try {
                let min: Point = {
                    x: around.x - pixelDistance,
                    y: around.y - pixelDistance
                };
                let max: Point = {
                    x: around.x + pixelDistance,
                    y: around.y + pixelDistance
                };

                this.convertToMapCoordinate(min).then((minCoord) => {
                    this.convertToMapCoordinate(max).then((maxCoord) => {
                        resolve({
                            minLat: Math.min(minCoord.lat, maxCoord.lat),
                            maxLat: Math.max(minCoord.lat, maxCoord.lat),
                            minLng: Math.min(minCoord.lng, maxCoord.lng),
                            maxLng: Math.max(minCoord.lng, maxCoord.lng),
                        });
                    });
                });
            } catch (ex) {
                console.log("Error in mapbox.getCoordinateRegionAroundPoint: " + ex);
                reject(ex);
            }
        });
    }

    protected onDisableScrollChanged(oldValue: boolean, newValue: boolean) {
    }

    private onDisableScrollPropertyChanged(oldValue: boolean, newValue: boolean) {
        this.onDisableScrollChanged(oldValue, newValue);
    }
}

export const zoomLevelProperty = new Property<MapboxViewCommonBase, number>({name: "zoomLevel"});
zoomLevelProperty.register(MapboxViewCommonBase);

export const accessTokenProperty = new Property<MapboxViewCommonBase, string>({name: "accessToken"});
accessTokenProperty.register(MapboxViewCommonBase);

export const mapStyleProperty = new Property<MapboxViewCommonBase, string>({name: "mapStyle"});
mapStyleProperty.register(MapboxViewCommonBase);

export const latitudeProperty = new Property<MapboxViewCommonBase, number>({name: "latitude"});
latitudeProperty.register(MapboxViewCommonBase);

export const longitudeProperty = new Property<MapboxViewCommonBase, number>({name: "longitude"});
longitudeProperty.register(MapboxViewCommonBase);

export const showUserLocationProperty = new Property<MapboxViewCommonBase, boolean>({
    name: "showUserLocation",
    defaultValue: MapboxCommon.defaults.showUserLocation,
    valueConverter: booleanConverter
});
showUserLocationProperty.register(MapboxViewCommonBase);

export const hideLogoProperty = new Property<MapboxViewCommonBase, boolean>({
    name: "hideLogo",
    defaultValue: MapboxCommon.defaults.hideLogo,
    valueConverter: booleanConverter
});
hideLogoProperty.register(MapboxViewCommonBase);

export const hideAttributionProperty = new Property<MapboxViewCommonBase, boolean>({
    name: "hideAttribution",
    defaultValue: MapboxCommon.defaults.hideAttribution,
    valueConverter: booleanConverter
});
hideAttributionProperty.register(MapboxViewCommonBase);

export const hideCompassProperty = new Property<MapboxViewCommonBase, boolean>({
    name: "hideCompass",
    defaultValue: MapboxCommon.defaults.hideCompass,
    valueConverter: booleanConverter
});
hideCompassProperty.register(MapboxViewCommonBase);

export const disableZoomProperty = new Property<MapboxViewCommonBase, boolean>({
    name: "disableZoom",
    defaultValue: MapboxCommon.defaults.disableZoom,
    valueConverter: booleanConverter
});
disableZoomProperty.register(MapboxViewCommonBase);

export const disableRotationProperty = new Property<MapboxViewCommonBase, boolean>({
    name: "disableRotation",
    defaultValue: MapboxCommon.defaults.disableRotation,
    valueConverter: booleanConverter
});
disableRotationProperty.register(MapboxViewCommonBase);

MapboxViewCommonBase.disableScrollProperty.register(MapboxViewCommonBase);

export const disableTiltProperty = new Property<MapboxViewCommonBase, boolean>({
    name: "disableTilt",
    defaultValue: MapboxCommon.defaults.disableTilt,
    valueConverter: booleanConverter
});
disableTiltProperty.register(MapboxViewCommonBase);

export const delayProperty = new Property<MapboxViewCommonBase, number>({name: "delay"});
delayProperty.register(MapboxViewCommonBase);

// -------------------------------------------------------------------------------------

/**
 * base class for views created in XML
 *
 * @see MapboxView
 */

export abstract class MapboxViewBase extends MapboxViewCommonBase {

    static mapReadyEvent: string = "mapReady";
    static scrollEvent: string = "scrollEvent";
    static moveBeginEvent: string = "moveBeginEvent";

    static locationPermissionGrantedEvent: string = "locationPermissionGranted";
    static locationPermissionDeniedEvent: string = "locationPermissionDenied";

    protected config: any = {};

    [zoomLevelProperty.setNative](value: number) {
        this.config.zoomLevel = +value;
    }

    [mapStyleProperty.setNative](value: string) {
        this.config.style = value;
        this.config.mapStyle = value;
    }

    [accessTokenProperty.setNative](value: string) {
        this.config.accessToken = value;
    }

    [delayProperty.setNative](value: number) {
        this.config.delay = parseInt("" + value);
    }

    [latitudeProperty.setNative](value: number) {
        this.config.center = this.config.center || {};
        this.config.center.lat = +value;
    }

    [longitudeProperty.setNative](value: number) {
        this.config.center = this.config.center || {};
        this.config.center.lng = +value;
    }

    [showUserLocationProperty.setNative](value: boolean) {
        this.config.showUserLocation = value;
    }

    [hideLogoProperty.setNative](value: boolean) {
        this.config.hideLogo = value;
    }

    [hideAttributionProperty.setNative](value: boolean) {
        this.config.hideAttribution = value;
    }

    [hideCompassProperty.setNative](value: boolean) {
        this.config.hideCompass = value;
    }

    [disableZoomProperty.setNative](value: boolean) {
        this.config.disableZoom = value;
    }

    [disableRotationProperty.setNative](value: boolean) {
        this.config.disableRotation = value;
    }

    [MapboxViewCommonBase.disableScrollProperty.setNative](value: boolean) {
        this.config.disableScroll = value;
    }

    [disableTiltProperty.setNative](value: boolean) {
        this.config.disableTilt = value;
    }
}

/*************** XML definition END ****************/
